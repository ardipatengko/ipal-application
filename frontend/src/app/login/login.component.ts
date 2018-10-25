import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  loginForm;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })
  }

  onSubmit(loginData){
    let user;
    this.authenticationService.authenticate(loginData.username, loginData.password)
    .subscribe(response => {
      user = response.data[0];
      localStorage.setItem('currentUser', JSON.stringify(user));
      if(user){
        this.router.navigate(['/admin']);
        console.log('------------- LOGIN SUCCESS ----------------');
      }else{
        console.log('------------- LOGIN FAILED ----------------');
      }
    });
  }
}
