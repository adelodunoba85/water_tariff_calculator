function waterTariff() {
    let amountOfWater = Number(document.getElementById("waterVol").value);
    let WaterBill;

    if (amountOfWater < 6000){
        WaterBill = 6 * 15.73;
    }
    else if (amountOfWater <= 10500){
        WaterBill = (6 * 15.73) + ((amountOfWater - 6000) / 1000 * 22.38);
    }
    else if (amountOfWater <= 35000){
        WaterBill = (6 * 15.73) + (10.5 * 22.38) + ((amountOfWater - 10500 - 6000) / 1000 * 31.77);
    }
    else {
        WaterBill = (6 * 15.73) + (10.5 * 22.38) + (35 * 31.77) + ((amountOfWater - 35000 - 10500 - 6000) / 1000 * 69.76);
    }
    displayResult(WaterBill); // Call the displayResult function
}

function displayResult(result) {
    document.getElementById('result').textContent = 'Water Bill: ' + result.toFixed(2); // Display the result on the HTML page
}
