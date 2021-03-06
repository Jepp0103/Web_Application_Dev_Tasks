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

    //Setting all elements with background color white
    fromFahr.style.backgroundColor = "#fff";
    fromKel.style.backgroundColor = "#fff";
    fromCel.style.backgroundColor = "#fff";
    toKel.style.backgroundColor = "#fff";
    toFahr.style.backgroundColor = "#fff";
    toFahr.style.backgroundColor = "#fff";

    //All buttons for chosing units to convert
    fromCel.onclick = function () {
        if (fromCel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromCel.style.backgroundColor = "#a9abae";
            fromFahr.style.backgroundColor = "#fff";
            fromKel.style.backgroundColor = "#fff";
            fromUnit = "°C";
        } else {
            fromCel.style.backgroundColor = "#fff";
        }
    }

    fromFahr.onclick = function () {
        if (fromFahr.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromFahr.style.backgroundColor = "#a9abae";
            fromKel.style.backgroundColor = "#fff";
            fromCel.style.backgroundColor = "#fff";
            fromUnit = "°F";
        } else {
            fromFahr.style.backgroundColor = "#fff";
        }
    }

    fromKel.onclick = function () {
        if (fromKel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromKel.style.backgroundColor = "#a9abae";
            fromCel.style.backgroundColor = "#fff";
            fromFahr.style.backgroundColor = "#fff";
            fromUnit = "K";
        } else {
            fromKel.style.backgroundColor = "#fff";
        }
    }

    toCel.onclick = function () {
        if (toCel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toCel.style.backgroundColor = "#a9abae";
            toKel.style.backgroundColor = "#fff";
            toFahr.style.backgroundColor = "#fff";
            toUnit = "°C";
        } else {
            toCel.style.backgroundColor = "#fff";
        }
    }

    toFahr.onclick = function () {
        if (toFahr.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toFahr.style.backgroundColor = "#a9abae";
            toKel.style.backgroundColor = "#fff";
            toCel.style.backgroundColor = "#fff";
            toUnit = "°F";
        } else {
            toFahr.style.backgroundColor = "#fff";
        }
    }

    toKel.onclick = function () {
        if (toKel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toKel.style.backgroundColor = "#a9abae";
            toCel.style.backgroundColor = "#fff";
            toFahr.style.backgroundColor = "#fff";
            toUnit = "K";
        } else {
            toKel.style.backgroundColor = "#fff";
        }
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