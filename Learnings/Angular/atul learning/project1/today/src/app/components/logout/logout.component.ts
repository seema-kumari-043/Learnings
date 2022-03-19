import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneserService } from 'src/app/services/oneser.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,
    private ha:OneserService
    ) { }


  ngOnInit(): void {
    this.ha.logoutService();
    this.route.navigate(['login'])
  }

}
