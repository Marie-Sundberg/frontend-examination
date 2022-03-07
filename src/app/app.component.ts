import { Component, Input, OnInit } from '@angular/core';
import { Packages } from './components/entities/packages';
import { MyPackagesService } from './services/my-packages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  skiPackages: Array<Packages> = new Array<Packages>();

  packages?: Packages; 
  showList: boolean = true;
  showForm: boolean = false;
  
  constructor(private myPackagesService: MyPackagesService ) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void {
    this.myPackagesService.getPackages().subscribe((response: Array<Packages>) => {
      this.skiPackages = response;
    })
  }
  onPackageSelected(packages :Packages) {
    this.packages = packages;
    this.showList = false;
    this.showForm = true;
    this.packages.header;
  }
  onCancelSelected():void {
    this.showForm = false;
    this.showList = true;
  }
}
