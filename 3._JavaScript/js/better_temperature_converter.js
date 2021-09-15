let fromUnit; //Setting chosen units in dropdown globally in order to do the calculation
let toUnit;
let tempNumber;
let resultNumber;

window.onload = function () {
    chooseTemperatureFromAndToUnits();
    let calcBtn = document.getElementById("calcBtn"); //Calculation button when units have been chosen
    calcBtn.onclick = function () {
        calculateTemperatureConversion(fromUnit, toUnit)
    }
}

function chooseTemperatureFromAndToUnits() {
    //Shortening all elements in naming
    let fromKel = document.getElementById("from_kel");
    let fromCel = document.getElementById("from_cel");
    let fromFahr = document.getElementById("from_fahr");
    let toKel = document.getElementById("to_kel");
    let toCel = document.getElementById("to_cel");
    let toFahr = document.getElementById("to_fahr");

    //All buttons for chosing units to convert
    fromCel.onclick = function () {
        fromUnit = "°C";
    }

    fromFahr.onclick = function () {
        fromUnit = "°F";
    }

    fromKel.onclick = function () {
        fromUnit = "K";
    }

    toCel.onclick = function () {
        toUnit = "°C";
    }

    toFahr.onclick = function () {
        toUnit = "°F";
    }

    toKel.onclick = function () {
        toUnit = "K";
    }
}

function calculateTemperatureConversion(fromUnit, toUnit) {
    tempNumber = parseFloat(document.getElementById("convertNumber").value); //Passing number in input into float

    if ((fromUnit === "°C" && toUnit === "°C") || (fromUnit === "°F" && toUnit === "°F") || (fromUnit === "K" && toUnit === "K")) {
        alert("Can't convert the same unit.")
    }

    if (fromUnit === "°C" && toUnit === "°F") {
        resultNumber = tempNumber * 1.8 + 32;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "°C" && toUnit === "°F") {
        resultNumber = tempNumber * 1.8 + 32;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "°C" && toUnit === "K") {
        resultNumber = tempNumber + 273.15;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "°F" && toUnit === "°C") {
        resultNumber = (tempNumber - 32) / 1.8;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "°F" && toUnit === "K") {
        resultNumber = (tempNumber - 32) * 5 / 9 + 273.15;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "K" && toUnit === "°C") {
        resultNumber = tempNumber - 273.15;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

    if (fromUnit === "K" && toUnit === "°F") {
        resultNumber = (tempNumber - 273.15) * 9 / 5 + 32;
        displayResult(tempNumber, fromUnit, resultNumber.toFixed(2), toUnit);
    }

}

function displayResult(tempNumber, fromUnit, resultNumber, toUnit) {
    let resultDiv = document.getElementById("resultDiv");
    if (resultDiv.innerHTML === "") {
        resultDiv.style.display = "block";
        resultDiv.innerHTML += tempNumber + fromUnit + " = <b>" + resultNumber + toUnit + "</b>";
    } else {
        resultDiv.innerHTML = "";
        resultDiv.style.display = "block";
        resultDiv.innerHTML += tempNumber + fromUnit + " = <b>" + resultNumber + toUnit + "</b>";
    }
}