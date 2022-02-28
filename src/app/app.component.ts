import { Component, Input, OnInit } from '@angular/core';
import { Packages } from './components/entities/packages'

import {skiEquipmentsData} from '../app/ski-equipments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  skiPackages?: Packages[];
  
  constructor() { }

  ngOnInit(): void {
    this.skiPackages = skiEquipmentsData;
  }
}
