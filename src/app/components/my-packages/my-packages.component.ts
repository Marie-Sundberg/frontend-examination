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

  showAllText: boolean = false;
  show = true;

  constructor() { }

  ngOnInit(): void {
 
  }
  
  public showText(): void{
    this.showAllText = !this.showAllText;
  }

  public pickButton(): void {
    this.show = !this.show;

  }

}
