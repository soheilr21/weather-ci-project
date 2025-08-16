
const $ = document

let months = ["January", "February", "March", "April", "May", "June", "July", "mordad", "September", "October", "November", "December"]; 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date()
let inputValue = $.querySelector('input')
let apiData = {
    url : 'https://api.openweathermap.org/data/2.5/weather?q=',
    key : '069e71065e2a92bcf0780b634c4d3162'
}

function fetchData() {
    let cityValue = inputValue.value

    fetch(`${apiData.url}${cityValue}&appid=${apiData.key}`)
    .then(response => response.json())
    .then(data => showData(data))
}

function showData(data){
    console.log(data);
    let cityElement = $.querySelector('.city')
    cityElement.innerHTML = `${data.name}, ${data.sys.country}`

    let tempElement = $.querySelector('.temp')
    tempElement.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`

    let averageTempElement = $.querySelector('.hi-low')
    averageTempElement.innerHTML = `${Math.round(data.main.temp_min - 273.15)}°c / ${Math.round(data.main.temp_max - 273.15)}°c`

    let weatherElement = $.querySelector('.weather')
    weatherElement.innerHTML = data.weather[0].main

}

function showDate(){

    let dateElement = $.querySelector('.date')
    let month = months[date.getUTCMonth()]
    let dayWeek = days[date.getUTCDay()]
    let dayMonth = date.getDate()
    let year = date.getFullYear()
    dateElement.innerHTML = `${dayWeek} ${dayMonth} ${month} ${year}`

}

window.addEventListener('keydown' , event => {
    if (event.key === "Enter") {
        fetchData()
    }
})

showDate()
