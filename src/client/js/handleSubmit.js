function handleSubmit(event) {
    event.preventDefault();

    // Get the inputs
    const city = document.getElementById('destination').value;
    const departDate = new Date(document.getElementById('depart').value);
    const returnDate = new Date(document.getElementById('return').value);
    const today = new Date(Date.now()-12*60*60*1000);
    const cityCheck = Client.inputChecker(city, departDate, returnDate, today)

    // Declaring variables
    let destinationName = '';
    let destinationWeather = '';
    let destinationPicture = ''

    if (cityCheck) {
        // Get data from Geonames API
        Client.postData(`/location`, { city })
            .then(locationData => {
                destinationName = `${locationData.name}, ${locationData.countryName}`

                const coordinates = {
                    lat: locationData.lat,
                    lng: locationData.lng,
                }
                // Get data from WeatherBIT API
                return Client.postData(`/weather`, coordinates)
            }).then(weatherData => {
                destinationWeather = `${weatherData.temp}&degC ${weatherData.weather.description}`
                // Get destination picture from Pixabay API
                return Client.postData(`/picture`, { city })
            }).then(pictureData => {
                destinationPicture = pictureData.webformatURL;
            }).then(() => {
                // Update the UI with the result
                Client.updateUI(destinationPicture, destinationName, destinationWeather, departDate, returnDate);
            })
            .catch(error => {
                alert(error);
            })
    }
    else {
        alert("Please enter valid CITY name. DEPARTURE date should be Later than CURRENT date and Earlier than RETURN date")
        return
    }
}

export { handleSubmit }