import { Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css']
})
export class DashCardComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  ngOnInit(): void {
  }

}
