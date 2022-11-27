// const { promiseImpl } = require("ejs");

const submit = document.getElementById("submit");
const gif = document.getElementById("pic");
const form = document.getElementById("form");
const weather_state = document.getElementById("weather-state");
const degree = document.getElementById("degree");
const city_name = document.getElementById("city-name");
const big_container = document.getElementById("big-container");
const notfoundmessage = document.getElementById("notfound");
let text;


function notFound() {
	notfoundmessage.style.display = "block";
	big_container.style.display = "none";
}

form.addEventListener('submit', async function (){
	event.preventDefault();
	text = document.getElementById('data').value;
	const api = await fetch('http://localhost:3000/api/' + text, {
		method: 'GET'
	});
	let data = await api.json();
	// data = JSON.stringify(api)
	console.log(data)
	if (data.success === false)
	{
		notFound();
		return 0;
	}
	else
		notfoundmessage.style.display = "none";
	
	gif.innerHTML = "<img src='" + data.current.weather_icons[0] + "' >";
	weather_state.innerText = data.current.weather_descriptions[0];
	degree.textContent = data.current.temperature + "°C";
	city_name.textContent = data.location.name + " ( " + data.location.country + " )";
	big_container.style.display = "block";
	console.log(data.success);
});