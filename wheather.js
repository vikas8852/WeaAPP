// // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
 const API_key='c7317b542acf9816a840fdc2788b6f2a'

const form=document.querySelector("form");
const button=document.querySelector("#button");
const weather=document.querySelector("#weather");
const search=document.querySelector("#search");

const getWeather=async(city) => {
    weather.innerHTML=`<h2> Loading... </h2>`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
   return showWeather(data);
   console.log(data);
}
 const showWeather=(data)=>{
   
    if(data.cod=="404"){
        weather.innerHTML=`<h2> City Not found </h2>`;
        return;
    }
    if(data.cod=="400"){
        weather.innerHTML=`<h2> Please Select the City </h2>`;
        return;
    }


//    tempdata.innerHTML =`${data.main.temp} °C`;
//    des.innerHTML =`${ data.weather[0].main}`;
// //    imgdata.innerHTML=`${<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" ></img>}`
//     humdata=innerHTML=`${data.main.humidity} %`;
//     winddata=innerHTML=`${data.wind.speed} km/H`;
    weather.innerHTML=`
    <div> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" ></div>
    <div><h2>${data.main.temp} °C</h2></div>
     <h4>${ data.weather[0].main}</h4></div>
     <div class="other">
     <div class="hum">
         <div> <img src="humidity.png" alt="" srcset="" height="50px" width="50px"></div>
         <div><p class="other_data">${data.main.humidity} %<br><h5 class="inner">Humidity</h5></p></div>
     </div>
     <div class="wind">
     <div><img src="wind.png" alt="" height="50px" width="50px"></div>
     <div><p class="other_data">${data.wind.speed} km/H<br><h5 class="inner">Wind Speed</h5></p></div>
    </div>
 </div>
    
   `
 }





form.addEventListener("submit",function(event){
    // weather.style.display='none';
    
    getWeather(search.value);
event.preventDefault()
})




// const API_key = 'c7317b542acf9816a840fdc2788b6f2a';

// const form = document.querySelector("form");
// const weather = document.querySelector("#weather"); // Corrected the id to "weather"
// const search = document.querySelector("#search");

// const getWeather = async (city) => {
//     // Use template literals (`) to correctly interpolate variables into the URL
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    
//     try {
//         const response = await fetch(url);
        
//         if (response.status === 200) {
//             const data = await response.json();
//             console.log(data);
            
//             // Display the weather information on the webpage
//             weather.textContent = `Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
//         } else {
//             console.error('Failed to fetch weather data');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// form.addEventListener("submit", function (event) {
//     getWeather(search.value);
//     event.preventDefault();
// });
