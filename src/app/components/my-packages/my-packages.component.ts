import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingResults } from '../entities/booking-results';
import { Packages } from '../entities/packages';

@Component({
  selector: 'app-my-packages',
  templateUrl: './my-packages.component.html',
  styleUrls: ['./my-packages.component.scss']
})
export class MyPackagesComponent implements OnInit {

  @Input()
  packages?: Packages;
  
  showOrHideText: boolean = false;

  @Output()
  packageSelected = new EventEmitter<Packages>();

  constructor() { }

  ngOnInit(): void {
  }
  public showText(): void{
    this.showOrHideText = !this.showOrHideText;
  }

  public pickButtonClicked(): void {
    this.packageSelected.emit(this.packages);
  }
}
