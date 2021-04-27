// Update the UI with the result
function updateUI(destinationPicture, destinationName, destinationWeather, departDate, returnDate) {
    document.getElementById('tripResult').innerHTML = `
    <div class="results" id="results">
        <div class="results__image">
            <img src="${destinationPicture}" alt="${destinationName}">
        </div>
        <div class="results__text">
            <h2 class="results__header">Trip to <strong>${destinationName}</strong><br>for ${Client.dateDiff(departDate, returnDate)} days</h2>
            <h2 class="results__header"><strong>Weather Forecast</strong><br>average of ${destinationWeather}</h2>
        </div>
    </div>
    `
}

export {updateUI};