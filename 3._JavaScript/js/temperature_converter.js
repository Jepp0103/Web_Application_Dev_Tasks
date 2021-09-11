let fromUnit = ""; //Setting chosen units in dropdown globally in order to do the calculation
let toUnit = "";
let tempNumber = 0;

window.onload = function () {
    chooseTemperatureFromAndToUnits();

    // document.getElementById("calcBtn").onclick = function () {
    //     displayTaxAmountAndFinalAmount()
    // }
}

function chooseTemperatureFromAndToUnits() {
    //Shortening all elements in naming
    let fromKel = document.getElementById("from_kel");
    let fromCel = document.getElementById("from_cel");
    let fromFahr = document.getElementById("from_fahr");
    let toKel = document.getElementById("to_kel");
    let toCel = document.getElementById("to_cel");
    let toFahr = document.getElementById("to_fahr");

    let calcBtn = document.getElementById("calcBtn");

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
            fromUnit = "cel";
        } else {
            fromCel.style.backgroundColor = "#fff";
        }
    }

    fromFahr.onclick = function () {
        if (fromFahr.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromFahr.style.backgroundColor = "#a9abae";
            fromKel.style.backgroundColor = "#fff";
            fromCel.style.backgroundColor = "#fff";
            fromUnit = "fahr";
        } else {
            fromFahr.style.backgroundColor = "#fff";
        }
    }

    fromKel.onclick = function () {
        if (fromKel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromKel.style.backgroundColor = "#a9abae";
            fromCel.style.backgroundColor = "#fff";
            fromFahr.style.backgroundColor = "#fff";
            fromUnit = "kel";
        } else {
            fromKel.style.backgroundColor = "#fff";
        }
    }

    toCel.onclick = function () {
        if (toCel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toCel.style.backgroundColor = "#a9abae";
            toKel.style.backgroundColor = "#fff";
            toFahr.style.backgroundColor = "#fff";
            toUnit = "cel";
        } else {
            toCel.style.backgroundColor = "#fff";
        }
    }

    toFahr.onclick = function () {
        if (toFahr.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toFahr.style.backgroundColor = "#a9abae";
            toKel.style.backgroundColor = "#fff";
            toCel.style.backgroundColor = "#fff";
            toUnit = "fahr";
        } else {
            toFahr.style.backgroundColor = "#fff";
        }
    }

    toKel.onclick = function () {
        if (toKel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toKel.style.backgroundColor = "#a9abae";
            toCel.style.backgroundColor = "#fff";
            toFahr.style.backgroundColor = "#fff";
            toUnit = "kel";
        } else {
            toKel.style.backgroundColor = "#fff";
        }
    }

    //Calculation buttons when units have been chosen
    calcBtn.onclick = function () {
        calculateTemperatureConversion(fromUnit, toUnit)
    }
}

function calculateTemperatureConversion(fromUnit, toUnit) {
    console.log("from unit", fromUnit)
    console.log("to unit", toUnit)
    tempNumber = document.getElementById("convertNumber").value; //Getting convert number
    console.log("tempNumber", tempNumber)

    if (fromUnit = "cel" && toUnit == "fahr") {
        console.log("final result", tempNumber * 1.8 + 32)
    }
}