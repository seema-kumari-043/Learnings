import { Component, OnInit } from '@angular/core';
import { OneserService } from 'src/app/services/oneser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public ser:OneserService
    ) { }

  ngOnInit(): void {
  }

}
