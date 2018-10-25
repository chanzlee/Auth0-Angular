import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials) {
    // returns observable (use post method inside service)
    this.authService.login(credentials)
      .subscribe(result => { 
        //depend on whether this is true or not, navigate or throw error.
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });
  }
}
