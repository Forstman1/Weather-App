

const submit = document.getElementById("submit");
const city_name = document.getElementById("form");
let text;

async function makeGrid() {
	event.preventDefault();
	console.log(city_name);
	const api = await fetch('http://api.weatherstack.com/current?access_key=5bb614ec38b8edc9232ca34664b27e7a&query=casablanca&units=m');
	let testing = await api.json();
	console.log(testing);
	testing = testing.location.name;
	console.log(testing);
	testing = testing.current.units;
	console.log(testing);
}


city_name.addEventListener('submit', async function (){
	event.preventDefault();
	text = document.getElementById('data').value;
	console.log(text);
	const api = await fetch('http://api.weatherstack.com/current?access_key=5bb614ec38b8edc9232ca34664b27e7a&query=' + text);
	let testing = await api.json();
	console.log(testing);
	testing = testing.current.weather_icons[0];
	console.log(testing);
});