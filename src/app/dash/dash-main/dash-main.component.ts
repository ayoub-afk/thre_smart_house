import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-dash-main',
  templateUrl: './dash-main.component.html',
  styleUrls: ['./dash-main.component.css']
})
export class DashMainComponent implements OnInit {
  @Input() sensors: Sensor[] | null  = [
    {
      name: "flame sensor",
      state: true,
      mode: true
    },

  ]

  @Output() houseChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  cardChange(){
    this.houseChange.emit('house Changed')
  }

}
