import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../components/entities/booking';
import { BookingResults } from '../components/entities/booking-results';
import { Packages } from '../components/entities/packages';


@Injectable({
  providedIn: 'root'
})
export class MyPackagesService {

  private apiBookingUrl = 'https://www-th-frontend.azurewebsites.net/api/exam/v1/booking';

  private apiUrl = 'https://www-th-frontend.azurewebsites.net/api/exam/v1/skiequipment';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Array<Packages>> {
    return this.http.get<Array<Packages>>(this.apiUrl);
  }
  createBooking(notification: Booking): Observable<BookingResults> {
    return this.http.post<BookingResults>(this.apiBookingUrl, notification);
  } 
}
