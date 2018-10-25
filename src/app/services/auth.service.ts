import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  // dependent on http service
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials));
  }

  //should be implemented
  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

