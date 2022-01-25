import { Component, OnInit } from '@angular/core';
import { AqiService } from 'src/app/services/aqi.service';
import { StationsDataService } from 'src/app/services/stations-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public stationsMaster: any[] = []

  constructor(
    private aqiService: AqiService,
    private stationsDataService: StationsDataService
  ) { }

  ngOnInit(): void {
    this.listStations()
  }

  listStations() {
    this.aqiService.listAQIBackend().subscribe({
      next: (res: any) => {
        //console.log(res) //ver listado de información que esta llegando del backend
        const res2: any = Object.values(res)
        if (res2[0].length > 0) {
          this.stationsMaster = res2[0]
          //console.log(this.stationsMaster)
        }
      },
      complete: () => { console.log('List stations success') }, // completeHandler
      error: () => { console.log('List stations error') }    // errorHandler
    })
  }

  updateStationsInfo() {
    //console.log(this.stationsMaster)
    this.listStations()
    this.stationsDataService.emitStationsData.emit(this.stationsMaster)
  }

}
