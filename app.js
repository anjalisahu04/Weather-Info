const Key ="d521caa35ba64cb9a06132319240309 ";
const search_btn = document.querySelector(".search");
const city= document.querySelector(".city-name");
const fetchWeatherData = async()=>{
    let city_val = city.value;
    if(city_val.length == 0){
        show.innerHTML = `<h3 class="error" >Please enter a city name</h3>`;
    }else{
        console.log(city.value)
        const url = `https://api.weatherapi.com/v1/current.json?key=${Key}&q=${city_val}`;
        let response =await fetch(url);
        let data = await response.json()
        console.log(data);
        show.innerHTML = `
        <h2 class="location">${data.location.name}, ${data.location.region}</h2>
        <h3 class = "weather">${data.current.condition.text}</h3>
        <img  class = "image" src = ${data.current.condition.icon}>
        <h1 class = "temprature">${data.current.temp_c} &deg</h1>
        <div class = "temp-container">
            <div> 
                <h4 class = "title">Humidity</h4>
                <h4 class = "temp">${data.current.humidity}</h4>
            </div> 
            <div> 
                <h4 class = "title">Wind Speed</h4>
                <h4 class = "temp">${data.current.wind_kph}</h4>


            </div>       
        </div> `   
        

    }    
}
search_btn.addEventListener('click',fetchWeatherData);