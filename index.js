const startButton = document.getElementById("start");
const startMask = document.getElementById("startmask");

const answerBox = document.getElementById("answers");
const answerButton = document.getElementById("addAnswer");

const questionChoice = document.getElementById("questionSelection");

const points = document.getElementsByName("points");

const statisticsBox = document.getElementById("statistics");


const scale = [
    [17, 31, 44, 45, 50, 52, 57, 59],
    [1, 22, 24, 29, 32, 40, 56, 64],
    [11, 15, 16, 20, 23, 27, 36, 60],
    [3, 7, 14, 18, 33, 35, 55, 62],
    [5, 6, 8, 9, 12, 13, 19, 39],
    [2, 10, 25, 34, 38, 42, 53, 61],
    [21, 28, 37, 46, 49, 51, 54, 63],
    [4, 26, 30, 41, 43, 47, 48, 58]
];

let scalePunctaj = new Array(8).fill(0);

// let statisticsString = "Statistici\n";

// for (i = 0; i < 8; i++)
// {
//     statisticsString = statisticsString + "Scale " + (i + 1) + ": " + scalePunctaj[i] + "\n";
// }

// statisticsBox.innerText = statisticsString;

startButton.addEventListener("click", event => {
        startMask.style.display = "none";
        startButton.style.display = "none";
});

answerButton.addEventListener("click", event => {
        let gasit = false;
        for (let i = 0; i < points.length && gasit === false; i++)
        {
            if (points[i].checked)
            {
                numOfPoints = parseInt(points[i].id);
                gasit = true;
            }
        }
        gasit = false;
        let questionNumber = parseInt(questionChoice.value);
        for (let i = 0; i < 8 && gasit === false; i++)
        {
            let st = 0;
            let dr = 7;
            while (st <= dr)
            {
                let mid = st + Math.floor((dr - st) / 2);
                if (scale[i][mid] == questionNumber)
                {
                    st = dr + 1;
                    gasit = true;
                    scalePunctaj[i] = scalePunctaj[i] + numOfPoints;
                    console.log("Intrebarea apartine scale-ului " + (i + 1));
                    console.log("punctaj: " + scalePunctaj[i]);
                    if (scalePunctaj[i] >= 17)
                    {
                        console.log("!! Testul a fost picat!")
                        answerButton.disabled = true;
                        answerButton.style.backgroundColor = "red";
                        answerButton.style.cursor = "not-allowed";
                    }
                    //statisticsString = "Statistici\n";

                    for (i = 0; i < 8; i++)
                    {
                        // statisticsString = statisticsString + "Scale " + (i + 1) + ": " + scalePunctaj[i] + "\n";
                        document.getElementById("scale-" + (i + 1)).innerText = scalePunctaj[i] + "p"
                    }
                    //statisticsBox.innerText = statisticsString;
                }
                if (scale[i][mid] < questionNumber)
                    st = mid + 1;
                else
                    dr = mid - 1;
            }
        }
});