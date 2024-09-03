const Key ="d521caa35ba64cb9a06132319240309 "
const city="Vidisha"
const url = `https://api.weatherapi.com/v1/current.json?key=${Key}&q=${city}`;
let img =document.querySelector(".weather-img")
const fetchWeatherData = async()=>{
    let response =await fetch(url);
    let data = await response.json()
    console.log(data)
    img.src=data.current.condition.icon
}
fetchWeatherData()