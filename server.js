
const cors = require('cors')
const { response } = require('express')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

let Object;

const apikey = "65659eac485759203f58c5d330b3f4fa";

async function GetData(cityname) {
    const api = await fetch("http://api.weatherstack.com/current?access_key=" + apikey + "&query=" + cityname)
    Object = await api.json();
}

app.get('/api/:name', async(req, res) => {
    let cityname = req.params.name;
    cityname.toString()
    console.log(cityname)
    GetData(cityname)
    res.json(Object)
    res.end();
})
 


app.listen(3000, ()=> {
    console.log("running on port 3000")
})
