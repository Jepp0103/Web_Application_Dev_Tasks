window.onload = function () {
    chooseTemperatureFromAndToUnits();

    // document.getElementById("calcBtn").onclick = function () {
    //     displayTaxAmountAndFinalAmount()
    // }
}

function chooseTemperatureFromAndToUnits() {
    let fromCelClickCounter = 0;
    let fromFahrClickCounter = 0;
    let fromKelClickCounter = 0;
    let toCelClickCounter = 0;
    let toFahrClickCounter = 0;
    let toKelClickCounter = 0;

    document.getElementById("from_cel").onclick = function () {
        if (fromCelClickCounter % 2 == 0) {
            document.getElementById("from_cel").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("from_cel").style.backgroundColor = "#fff";
        }
        fromCelClickCounter++;
    }

    document.getElementById("from_fahr").onclick = function () {
        if (fromFahrClickCounter % 2 == 0) {
            document.getElementById("from_fahr").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("from_fahr").style.backgroundColor = "#fff";
        }
        fromFahrClickCounter++;
    }

    document.getElementById("from_kel").onclick = function () {
        if (fromKelClickCounter % 2 == 0) {
            document.getElementById("from_kel").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("from_kel").style.backgroundColor = "#fff";
        }
        fromKelClickCounter++;
    }

    document.getElementById("to_cel").onclick = function () {
        if (toCelClickCounter % 2 == 0) {
            document.getElementById("to_cel").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("to_cel").style.backgroundColor = "#fff";
        }
        toCelClickCounter++;
    }

    document.getElementById("to_fahr").onclick = function () {
        if (toFahrClickCounter % 2 == 0) {
            document.getElementById("to_fahr").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("to_fahr").style.backgroundColor = "#fff";
        }
        toFahrClickCounter++;
    }

    document.getElementById("to_kel").onclick = function () {
        if (toKelClickCounter % 2 == 0) {
            document.getElementById("to_kel").style.backgroundColor = "#a9abae";
        } else {
            document.getElementById("to_kel").style.backgroundColor = "#fff";
        }
        toKelClickCounter++;
    }
}

function calculateTemperatureConversion(unitOne, unitTwo) {

    //celcius to fahrenheit
    if ()
    c * 2.12
}