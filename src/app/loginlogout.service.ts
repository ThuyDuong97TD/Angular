import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginlogoutService {
  googleProvider = new GoogleAuthProvider();
  user : any;
  constructor(public auth: Auth) { 
    console.log("LoginLogoutService");
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in
        this.user = user;
        console.log("user is signed in");
      } else {
        // User is signed out
        this.user = null;
        console.log("user is signed out");
      }
    });
  }
  clickLogin(){
    signInWithPopup(this.auth, this.googleProvider);
  }
  clickLogout(){
    this.auth.signOut();
  }
}
