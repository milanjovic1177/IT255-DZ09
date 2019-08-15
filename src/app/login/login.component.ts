import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = '';
  password = '';
  invalid_credentials = false;
  isLoggedIn = false;

  constructor(private userService: UserService, private cookieService: CookieService, private _router:Router) { }

  ngOnInit() {
    this.isLoggedIn = this.cookieService.check('met_hotels_token');
    if(this.isLoggedIn){
        this._router.navigate(['/home']);
    }
  }
  
  
  login(form) {
    this.email = form.value.email;
    this.password = form.value.pwd;
  
    if(this.userService.areCredentialsOk(form.value.email, form.value.pwd)){
        this.cookieService.set( 'met_hotels_token', 'some_token_xxxxxx' );
        this.isLoggedIn = true;
        this.invalid_credentials = false;
        this._router.navigate(['/home']);
    } else {
        this.invalid_credentials = true;
    }
  }
}
