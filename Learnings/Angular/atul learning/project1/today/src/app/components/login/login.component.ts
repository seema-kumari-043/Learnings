import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneserService } from 'src/app/services/oneser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName!:string;
  password!:string;

  constructor(
    private hc:OneserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  userAuth(){
   if( this.hc.authService(this.userName,this.password)){
      this.router.navigate(["/lists"]);
   }
   else
   {
     console.log("this is false");
   }

  }


}
