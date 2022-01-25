import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  public ica:any[] = [
    {icaRange:'0 - 50', level:'Bien'},
    {icaRange:'51 - 100', level:'Moderado'},
    {icaRange:'101- 150', level:'Insalubre para grupos sensibles'},
    {icaRange:'151- 200', level:'Insalubre'},
    {icaRange:'201- 300', level:'Muy poco saludable'},
    {icaRange:'300+', level:'Peligroso'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * changeColor() {
    var tableValue = document.getElementById("legendtable");
    var observation = this.ica.level.value;
    switch () {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
  }
   */

}
