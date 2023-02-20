const button = document.getElementById("search");
const input = document.getElementById("input");
const cityName = document.querySelector(".cityName");
const temperature = document.querySelector(".temp");
const icon = document.querySelector(".icon");
const desc = document.querySelector(".desc");
const humiDity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");

button.addEventListener("click", () => {
  const inputVal = input.value;
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=a0c17f757e7ab668e464a951315f6b09&units=metric&`;
  const fetchData = fetch(apiKey).then((res) => {
    res.json().then((data) => {
      const { temp, humidity } = data.main;
      const desCription = data.weather[0].description;
      const speed = data.wind;
      const icons = data.weather[0].icon;
      const imgUrl = `http://openweathermap.org/img/wn/${icons}@2x.png`;
      icon.src = imgUrl;
      cityName.innerHTML = `Weather in ${inputVal}`;
      desc.innerHTML = desCription;
      temperature.innerHTML = `${temp}°C`;
      humiDity.innerHTML = `Humidity: ${humidity}%`;
    });
  });
});
