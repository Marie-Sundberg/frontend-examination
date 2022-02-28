import { Component, Input, OnInit } from '@angular/core';
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
  show = true;

  constructor() { }

  ngOnInit(): void {
 
  }
  
  public showText(): void{
    this.showOrHideText = !this.showOrHideText;
  }

  public pickButton(): void {
    this.show = !this.show;
  }

}
