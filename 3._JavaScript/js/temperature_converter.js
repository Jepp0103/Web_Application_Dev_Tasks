window.onload = function () {
    chooseTemperatureFromAndToUnits();

    // document.getElementById("calcBtn").onclick = function () {
    //     displayTaxAmountAndFinalAmount()
    // }
}

function chooseTemperatureFromAndToUnits() {
    let fromKel = document.getElementById("from_kel");
    let fromCel = document.getElementById("from_cel");
    let fromFahr = document.getElementById("from_fahr");
    let toKel = document.getElementById("to_kel");
    let toCel = document.getElementById("to_cel");
    let toFahr = document.getElementById("to_fahr");


    fromCel.onclick = function () {
        if (fromCel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromCel.style.backgroundColor = "#a9abae";
            fromFahr.style.backgroundColor = "#fff";
            fromKel.style.backgroundColor = "#fff";
        } else {
            fromCel.style.backgroundColor = "#fff";
        }
    }

    document.getElementById("from_fahr").onclick = function () {
        if (fromFahr.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromFahr.style.backgroundColor = "#a9abae";
            fromKel.style.backgroundColor = "#fff";
            fromCel.style.backgroundColor = "#fff";
        } else {
            fromFahr.style.backgroundColor = "#fff";
        }
    }

    document.getElementById("from_kel").onclick = function () {
        if (fromKel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            fromKel.style.backgroundColor = "#a9abae";
            fromCel.style.backgroundColor = "#fff";
            fromFahr.style.backgroundColor = "#fff";
        } else {
            fromKel.style.backgroundColor = "#fff";
        }
    }

    document.getElementById("to_cel").onclick = function () {
        if (toCel.style.backgroundColor.toString() === "rgb(255, 255, 255)") {
            toCel.style.backgroundColor = "#a9abae";
            toKel.style.backgroundColor = "#fff";
            toFahr.style.backgroundColor = "#fff";
        } else {
            toCel.style.backgroundColor = "#fff";
        }
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

// function calculateTemperatureConversion(unitOne, unitTwo) {

//     //celcius to fahrenheit
//     if ()
//     c * 2.12
// }