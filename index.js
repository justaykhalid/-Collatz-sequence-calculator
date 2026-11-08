const numInput = document.querySelector("#num_input");
const submitBtn = document.querySelector("#submit");
let calcNum;
let currentValue;
let calcLoopContainer = [];
const outputBox = document.querySelector(".output");
const outputSpan = document.querySelector(".outputSpan");
const close = document.querySelector(".closeBtn");
let StartingNumber;
let TotalSteps;
let HighestNumber;
const startingNumberDisplay = document.querySelector("#startingNumber");
const totalStepsDisplay = document.querySelector("#totalSteps");
const highestNumberDisplay = document.querySelector("#highestNumber");
const statisticsBox = document.querySelector(".statistics");
const averageNumberDisplay = document.querySelector("#averageNumber");
let averageNum;
function validate() {
    if (calcNum <= 0) {
        outputSpan.innerHTML = "this only works for positive integers";
        return false;
    }
    else if (!Number.isInteger(calcNum)) {
        outputSpan.innerHTML = "Enter a valid integer";
        return false;
    }
    return true
}

function mainCalc() {
    if (currentValue % 2 === 0) {
        currentValue = currentValue / 2;
        calcLoopContainer.push(currentValue);
        return currentValue;
    } else if (currentValue % 2 === 1) {
        currentValue = (3 * currentValue) + 1;
        calcLoopContainer.push(currentValue);
        return currentValue;
    }
}

function calcLoop() {
    if (validate() === false) {
        return false;
    }
    while (currentValue != 1) {
        mainCalc()
    }
    for (const num of calcLoopContainer) {
        outputSpan.innerHTML += `${num},`
    }
    return true;
}


submitBtn.onclick = function () {
    calcNum = +numInput.value;

    calcLoopContainer = [];
    outputSpan.innerHTML = "";

    currentValue = calcNum;
    StartingNumber = calcNum;

    calcLoopContainer.push(calcNum);

    outputBox.style.display = "flex";

    if (calcLoop() === false) {
        statisticsBox.style.display = "none"
        return;
    }

    TotalSteps = calcLoopContainer.length - 1;
    HighestNumber = Math.max(...calcLoopContainer);
    statisticsBox.style.display = "block"
    startingNumberDisplay.textContent = StartingNumber;
    totalStepsDisplay.textContent = TotalSteps;
    highestNumberDisplay.textContent = HighestNumber;
    averageNum = calcLoopContainer.reduce((sum, current) => sum + current, 0) / calcLoopContainer.length;
    averageNumberDisplay.textContent = averageNum.toFixed(2);
};
close.onclick = function () {
    outputBox.style.display = "none";
    calcLoopContainer = []
}