
const inputEl = document.getElementById("inpt")
const convertBtnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const METER_TO_FEET = 3.281
const LITER_TO_GALLON = 0.264
const KG_TO_POUND = 2.204

convertBtnEl.addEventListener("click", function() {
    const number = Number(inputEl.value)
    const meterToFeet = (number * METER_TO_FEET).toFixed(3)
    const literToGallon = (number * LITER_TO_GALLON).toFixed(3)
    const kilogramToPound = (number * KG_TO_POUND).toFixed(3)
    const feetToMeter = (number / METER_TO_FEET).toFixed(3)
    const gallonToLiter = (number / LITER_TO_GALLON ).toFixed(3)
    const poundToKilogram = (number / KG_TO_POUND).toFixed(3)

    function convert(from, to, conversion) {
        return `${number} ${from} = ${conversion} ${to}`
    }

    lengthEl.innerHTML = `
        <h2>Length (Meter/Feet)</h2>
        <p>
            ${convert("meters", "feet", meterToFeet)} | ${convert("feet", "meters", feetToMeter)}
        </p>`
    volumeEl.innerHTML = `
        <h2>Volume (Liters/Gallons)</h2><p>
            ${convert("liters", "gallons", literToGallon)} | ${convert("gallons", "liters", gallonToLiter)}
        </p>`
    massEl.innerHTML = `
        <h2>Mass (Killograms/Pounds)</h2><p>
            ${convert("kilos", "pounds", kilogramToPound)} | ${convert("pounds", "kilos", poundToKilogram)}
        </p>`
})


