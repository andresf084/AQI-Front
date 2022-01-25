const https = require("https");

const getAirQualityIndexFromUSB = () => {
    let mayor = 200, menor = 50;
    return Math.random() * (mayor - menor) + menor;
}

const getAirQualityIndexFromThirdPartyService = () => {
    //Cómo carajos consulto un servicio de terceros?
    return new Promise((resolve, reject) => {
        try {
            https.get("https://api.waqi.info/search/?token=ab3433f5809ee18f71926b0ef975a909dad93746&keyword=bogota", (res) => {
                /*obtener body del response*/
                res.on("data", (chunk) => {
                    let dataJSON = JSON.parse(chunk)
                    let dataLocalidades = dataJSON.data
                    let dataStations = []
                    let stationsproperties = {}
                    for (let i = 0; i < dataLocalidades.length; i++) {
                        stationsproperties = {name: dataLocalidades[i].station.name, aqi: dataLocalidades[i].aqi, time: dataLocalidades[i].time.stime}
                        dataStations.push(stationsproperties)
                    }
                    //console.log(dataStations)
                    resolve(dataStations)
                });
            })
        } catch {
            reject("Ocurrió error en la obtención del body")
        }
    }).then((data)=>{return data}).catch((err)=>{return err})
}

module.exports = {
    getAirQualityIndexFromUSB,
    getAirQualityIndexFromThirdPartyService
}