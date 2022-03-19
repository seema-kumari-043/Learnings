import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneserService implements CanActivate {

  authData:boolean=false;
  authService(username:string,password:string){
    if(username==='a' && password==='t'){
      sessionStorage.setItem("paper","ok");
      this.authData=true;
      return true;
    }
    else{
      return false;
    }
  }

  valiService(){
    if(this.authData){
      return true;
    }
    else{
      return false;
    }
  }
  logoutService(){
    this.authData=false;
  }

  constructor(private rt:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.valiService()){

      return true;
    }
    else{

      return false;
    }
  }
}
