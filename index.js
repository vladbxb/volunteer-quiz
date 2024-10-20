const startButton = document.getElementById("start");
const startMask = document.getElementById("startmask");

const answerBox = document.getElementById("answers");
const answerButton = document.getElementById("addAnswer");
const restartButton = document.getElementById("restart");

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

const defaultColor = "rgb(254, 216, 177)";
const correctColor = "rgb(182, 199, 170)";
const notAllowedColor = "rgb(30, 32, 30)";

let scalePunctaj = new Array(8).fill(0);

let questionNumber = "default";
// let statisticsString = "Statistici\n";

// for (i = 0; i < 8; i++)
// {
//     statisticsString = statisticsString + "Scale " + (i + 1) + ": " + scalePunctaj[i] + "\n";
// }

// statisticsBox.innerText = statisticsString;

disableButton = (button) => {
    button.disabled = true;
    button.style.backgroundColor = notAllowedColor;
    button.style.cursor = "not-allowed";
}

enableButton = (button) => {
    button.disabled = false;
    button.style.backgroundColor = defaultColor;
    button.style.cursor = "auto"
}

resetCorrect = () => {
    for (let i = 0; i < 8; i++) {
        let currentScaleColor = document.getElementById("scale-" + (i + 1)).style.color;
        // console.log("scale-" + (i + 1) + "is " + currentScaleColor);
        if (currentScaleColor == correctColor) {
            document.getElementById("scale-" + (i + 1)).style.color = "rgb(0, 0, 0)";
            document.getElementById("scale-" + (i + 1) + "-p").style.color = "rgb(0, 0, 0)";
            break;
        }
    }
}

changeCorrect = (k) => {
    resetCorrect();
    document.getElementById("scale-" + (k + 1)).style.color = correctColor;
    document.getElementById("scale-" + (k + 1) + "-p").style.color = correctColor;
}

setScaleScore = (k) => {
    document.getElementById("scale-" + (k + 1) + "-p").innerText = scalePunctaj[k] + "p"
}

startButton.addEventListener("click", event => {
        startMask.style.display = "none";
        startButton.style.display = "none";
});

answerButton.addEventListener("click", event => {
        if (questionChoice.value === "default")
            alert("Eroare: trebuie sa selectezi o intrebare!")
        else if (questionChoice.value != questionNumber) {
            let gasit = false;
            for (let i = 0; i < points.length; i++)
            {
                if (points[i].checked)
                {
                    numOfPoints = parseInt(points[i].id);
                    break;
                }
            }
            questionNumber = parseInt(questionChoice.value);
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
                        changeCorrect(i);
                        if (scalePunctaj[i] >= 17)
                        {
                            disableButton(answerButton);
                            alert("Testul a fost picat!")
                            restartButton.style.backgroundColor = correctColor;
                        }

                        setScaleScore(i);
                    }
                    if (scale[i][mid] < questionNumber)
                        st = mid + 1;
                    else
                        dr = mid - 1;
                }
            }
        }
});

restartButton.addEventListener("click", event => {
    scalePunctaj.fill(0);
    resetCorrect();
    for (i = 0; i < 8; i++)
            setScaleScore(i);
    
    enableButton(answerButton);
    restartButton.style.backgroundColor = defaultColor;
});