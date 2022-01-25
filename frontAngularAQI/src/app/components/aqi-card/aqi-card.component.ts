import { Component, OnInit } from '@angular/core';
import { StationsDataService } from 'src/app/services/stations-data.service';


@Component({
  selector: 'app-aqi-card',
  templateUrl: './aqi-card.component.html',
  styleUrls: ['./aqi-card.component.css']
})
export class AqiCardComponent implements OnInit {

  constructor(
    private stationsDataService: StationsDataService
  ) {}
  public stationDataMaster: any[] = [];
  public selectElement: any;
  public _aqi: any;
  public _time: any;

  ngOnInit(): void {
    this.stationsDataService.emitStationsData.subscribe(
      data => {console.log(data);
      this.stationDataMaster = data;
      })
  }

  onOptionsSelected(value: any){
    console.log(value);
    for (let i=0; i < this.stationDataMaster.length; i++) {
      if (this.stationDataMaster[i].name == value) {
        this._aqi = this.stationDataMaster[i].aqi;
        this._time = this.stationDataMaster[i].time;
      }
    }
  }

}
