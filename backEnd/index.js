const express = require('express')
const cors = require('cors')
const {getAirQualityIndexFromThirdPartyService } = require('./helpers/aqiService')


const app = express()
const port = 3030

app.get("/aqi",cors(),async (req,res)=>{
    res.send(
    {
      aqiFromThirdPartyService: await getAirQualityIndexFromThirdPartyService()
    }
)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`) //root -> localhost:3030
})