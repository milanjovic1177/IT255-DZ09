import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = '';
  password = '';
  password2 = '';
  error_signing_up = false;
  pwds_not_equal = false;
  isLoggedIn = false;
  
  constructor(private userService: UserService, private cookieService: CookieService, private _router:Router) { }

  ngOnInit() {
    this.isLoggedIn = this.cookieService.check('met_hotels_token');
    if(this.isLoggedIn){
        this._router.navigate(['/home']);
    }
  }

  register(form) {
    console.log(form);
    console.log(form.value.email);
    console.log(form.value.pwd);
    console.log(form.value.pwd_repeat);
    this.email = form.value.email;
    this.password = form.value.pwd;
    this.password2 = form.value.pwd_repeat;
  
    if(form.value.pwd == form.value.pwd_repeat){
        if(this.userService.insertUser(form.value.email, form.value.pwd)){
            this.cookieService.set( 'met_hotels_token', 'some_token_xxxxxx' );
            this.isLoggedIn = true;
            this.error_signing_up = false;
            this.pwds_not_equal = false;
            this._router.navigate(['/home']);
        } else {
            this.error_signing_up = true;
            this.pwds_not_equal = false;
        }
    } else {
        this.error_signing_up = false;
        this.pwds_not_equal = true;
    }
  }
}
