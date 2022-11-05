import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private post: AppointmentService, private route: Router) {}
  user: any;
  name: any;

  ngOnInit(): void { }
  

  loginFunc() {
    this.post.saveLogin(this.loginForm.value).subscribe((result: any) => {
      if (result != 0) {
        localStorage.setItem('userid', result['id']); //ilagay sa local storage
        console.log(result['id']);
        this.route.navigate(['/main']);
      } else {
        console.log('login failed');
      }
    });
  }
}

