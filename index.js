const express=require('express')
const bodyParser = require('body-parser');
const axios=require('axios')
const app=express()
const port=3000
const apiKey = 'f125a1d2ae784e8d538949bb0e1d8616';
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json())
app.post("/getWeather",async (req,res)=>{
      const cities=req.body.cities
      console.log("API hit")
      let weather={
      }
      for (var i=0;i<cities.length;i++){

        const city = cities[i]
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        const response = await axios.get(apiUrl)
          const weatherData = response.data;
          weather[cities[i]]=Math.round((weatherData.main.temp-273.15) * 100) / 100
          console.log(weatherData.main.temp);
      
      }
      res.send({Weather_in_C:{...weather}})

})
app.listen(port,(req,res)=>{
    console.log("Listening to Port")
})
