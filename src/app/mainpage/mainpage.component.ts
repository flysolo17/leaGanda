import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { User } from '../model/User';
import { Appointment } from '../model/Appointment';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  constructor(private service: AppointmentService) {}
  users: any;

  ngOnInit(): void {
    this.service
      .getUserInfo({ id: localStorage.getItem('userid')! })
      .subscribe((result: User) => {
        if (result != null) {
          console.log('main page' + result.firstName);
          console.log(result);
          this.users = result;
        }
      });
  }

  saveAppointment() {
    this.service
      .addAppointment({
        patientID: this.users['id'],
        reason: 'esdas',
        scheduleAt: new Date(),
      })
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
