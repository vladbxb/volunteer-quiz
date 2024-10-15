const startButton = document.getElementById("start");
const startMask = document.getElementById("startmask");

const answerBox = document.getElementById("answers")
const answerButton = document.getElementById("addAnswer")

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

let scalePunctaj = new Array(8);

startButton.addEventListener("click", event => {
        startMask.style.display = "none";
        startButton.style.display = "none";
})

answerButton.addEventListener("click", event => {
        for (let i = 0; i < 8; i++)
        {
            for (let j = 0; j < 8; j++)
                console.log(i + ' ' + j);
        }
})