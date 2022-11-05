import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  appointmentSignup = new FormGroup({
    firstName: new FormControl(null),
    middleName: new FormControl(null),
    lastName: new FormControl(null),
    birthDate: new FormControl(null),
    age: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private post: AppointmentService, private route: Router) {}

  ngOnInit(): void {}
  saveSign() {
    //console.log(this.appointmentSignup.value);
    this.post
      .saveSignup(this.appointmentSignup.value)
      .subscribe((result: any) => {
        if (result) {
          console.log('Account Created Successfully!');
          this.route.navigate(['/login']);
        }
      });
  }
}
