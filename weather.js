
        const  apiKey ="592a88bc49ef696b6b3a3cc3611f21a3";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox =document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weatherIcon= document.querySelector(".weather-icon");
        

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
            
            if (data.weather[0].main=="Clouds"){
                weatherIcon.src= "Image/cloud.jpg";

            }
            else if (data.weather[0].main=="Clear"){
                weatherIcon.src = "Image/sun.jpg";
            }
            else if (data.weather[0].main=="Rain"){
                weatherIcon.src="Image/rain.jpg";

            }
            else if (data.weather[0].main=="Mist"){
                weatherIcon.src="Image/mist.jpg";

            }
     }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);

        })
        