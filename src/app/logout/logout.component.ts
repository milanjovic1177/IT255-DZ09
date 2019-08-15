import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private _router:Router) { }

  ngOnInit() {
    this.cookieService.delete('met_hotels_token');
    this._router.navigate(['/home']);
  }

}
