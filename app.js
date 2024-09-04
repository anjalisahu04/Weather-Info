const Key ="d521caa35ba64cb9a06132319240309 ";
const search_btn = document.querySelector(".search");
const city= document.querySelector(".city-name");
const fetchWeatherData = async()=>{
    let city_val = city.value;
    if(city_val.length == 0){
        show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
    }else{
        console.log(city.value)
        const url = `https://api.weatherapi.com/v1/current.json?key=${Key}&q=${city_val}`;
        let response =await fetch(url);
        let data = await response.json()
        console.log(data)
        img.src=data.current.condition.icon
    }    
}
search_btn.addEventListener('click',fetchWeatherData);