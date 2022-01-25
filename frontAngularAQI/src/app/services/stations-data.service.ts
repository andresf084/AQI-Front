import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StationsDataService {
  @Output() emitStationsData: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
