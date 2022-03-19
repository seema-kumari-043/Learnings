import { Component, OnInit } from '@angular/core';
import { Userdata } from 'src/app/model/userdata';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(

  ) { }

  lst=[
    new  Userdata("a1","add1","1234"),
    new  Userdata("a2","add1","1234"),
    new  Userdata("a3","add1","1234"),
    new  Userdata("a4","add1","1234"),

  ]

  ngOnInit(): void {

  }

}
