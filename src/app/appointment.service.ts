import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './model/User';
import { Appointment } from './model/Appointment';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  url = 'http://localhost/appointment/';

  constructor(private http: HttpClient) {}

  //login
  saveSignup(signup: any) {
    return this.http.post(this.url + 'signup.php', JSON.stringify(signup));
  }
  saveLogin(result: any) {
    return this.http.post(this.url + 'login.php', JSON.stringify(result));
  }

  getUserInfo(result: any) {
    return this.http.post<User>(this.url + 'getPatient.php', result);
  }
  addAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(
      this.url + 'addAppointment.php',
      appointment
    );
  }
}
