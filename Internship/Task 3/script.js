document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperatureInput = document.getElementById('temperatureInput').value;
  const unitSelect = document.getElementById('unitSelect').value;
  const convertedResult = document.getElementById('convertedResult');

  if (!temperatureInput || isNaN(temperatureInput)) {
    convertedResult.textContent = 'Please enter a valid temperature.';
    return;
  }

  const temperature = parseFloat(temperatureInput);

  if (unitSelect === 'celsius') {
    const convertedToFahrenheit = (temperature * 9/5) + 32;
    const convertedToKelvin = temperature + 273.15;
    convertedResult.innerHTML = `${temperature.toFixed(2)} °C is equal to: <br>
                                ${convertedToFahrenheit.toFixed(2)} °F <br>
                                ${convertedToKelvin.toFixed(2)} K`;
  } else if (unitSelect === 'fahrenheit') {
    const convertedToCelsius = (temperature - 32) * 5/9;
    const convertedToKelvin = (temperature - 32) * 5/9 + 273.15;
    convertedResult.innerHTML = `${temperature.toFixed(2)} °F is equal to: <br>
                                ${convertedToCelsius.toFixed(2)} °C <br>
                                ${convertedToKelvin.toFixed(2)} K`;
  } else if (unitSelect === 'kelvin') {
    const convertedToCelsius = temperature - 273.15;
    const convertedToFahrenheit = (temperature - 273.15) * 9/5 + 32;
    convertedResult.innerHTML = `${temperature.toFixed(2)} K is equal to: <br>
                                ${convertedToCelsius.toFixed(2)} °C <br>
                                ${convertedToFahrenheit.toFixed(2)} °F`;
  }
}
