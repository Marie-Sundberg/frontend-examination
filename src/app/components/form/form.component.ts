import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyPackagesService } from 'src/app/services/my-packages.service';
import { Booking } from '../entities/booking';
import { BookingResults } from '../entities/booking-results';
import { Packages } from '../entities/packages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  packages?: Packages;

  name?: string;
  confirmationNumber?: string;
  result?: BookingResults;

  showReciept: boolean = true;

  @Output()
  cancelBooking = new EventEmitter();

  constructor(private notificationService: MyPackagesService) { }

  ngOnInit(): void {
  }

  onBookingSelected() {
    if(!this.name || !this.packages) {
    return;
  }
  const notification = new Booking(this.name, this.packages.id);
  this.notificationService.createBooking(notification).subscribe((response: 
  BookingResults) => {
    this.result = response;
    this.showReciept = !this.showReciept;
 });
}
  cancelButtonClicked(): void {
    this.cancelBooking.emit(this.packages);
  }
}
