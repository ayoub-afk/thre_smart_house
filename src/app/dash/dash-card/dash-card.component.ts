import { Sensor } from '../../models/sensor';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css']
})
export class DashCardComponent implements OnInit {
  _sensorData: Sensor = {
    name: "flame sensor",
    state: true,
    data: 80,
    mode: true
  }
  @Input() set sensorData(value: Sensor){
    this._sensorData =value;
    this.sliderControl.setValue(value.state)
    this.checkBoxControl.setValue(value.mode)

  }

  get sensorData(){
    console.log(this._sensorData)
    return this._sensorData
  }

  @Output() change= new EventEmitter();

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  sliderControl= new FormControl('')
  checkBoxControl = new FormControl('')

  ngOnInit(): void {
  }

  onToggle(){
    this.sensorData.state = this.sliderControl.value
    this.sensorData.mode = this.checkBoxControl.value
    this.change.emit("change")
  }

}
