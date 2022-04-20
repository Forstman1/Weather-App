

const submit = document.getElementById("submit");
const gif = document.getElementById("pic");
const form = document.getElementById("form");
const weather_state = document.getElementById("weather-state");
const degree = document.getElementById("degree");
const city_name = document.getElementById("city-name");
const big_container = document.getElementById("big-container");
const notfoundmessage = document.getElementById("notfound");
let text;

// async function makeGrid() {
// 	event.preventDefault();
// 	console.log(city_name);
// 	const api = await fetch('http://api.weatherstack.com/current?access_key=5bb614ec38b8edc9232ca34664b27e7a&query=casablanca&units=m');
// 	let testing = await api.json();
// 	console.log(testing);
// 	testing = testing.location.name;
// 	console.log(testing);
// 	testing = testing.current.units;
// 	console.log(testing);
// }


function notFound() {
	notfoundmessage.style.display = "block";
	big_container.style.display = "none";
}

form.addEventListener('submit', async function (){
	event.preventDefault();
	text = document.getElementById('data').value;
	// console.log(text);
	const api = await fetch('http://api.weatherstack.com/current?access_key=5bb614ec38b8edc9232ca34664b27e7a&query=' + text);
	let testing = await api.json();
	if (testing.success === false)
	{
		notFound();
		return 0;
	}
	else
		notfoundmessage.style.display = "none";
	gif.innerHTML = "<img src='" + testing.current.weather_icons[0] + "' >";
	weather_state.innerText = testing.current.weather_descriptions[0];
	degree.textContent = testing.current.temperature + "°C";
	city_name.textContent = testing.location.name + " ( " + testing.location.country + " )";
	big_container.style.display = "block";
	console.log(testing.success);
});