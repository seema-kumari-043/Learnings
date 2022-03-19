import { Component, OnInit } from '@angular/core';
import { Abcd } from 'src/app/classes/abcd';
@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  // abcd:any=[
  //   {name:'atul',roll:1},
  //   {name:'aravind',roll:2},
  //   {name:'abhisekh',roll:3},
  //   {name:'aarjun',roll:4},
  //   {name:'anil',roll:5},
  // ]
  // a:any=[
  //   new Abcd('a',1),
  //   new Abcd('b',2),
  //   new Abcd('c',3),
  //   new Abcd('d',4),
  //   new Abcd('e',5)
  // ]
  constructor() { }

  ngOnInit(): void {
  }
  fun1(){
    sessionStorage.setItem('at','aa')
  }
 fun2(){
   sessionStorage.removeItem('at','aa' );
 }
 fun3(){
   sessionStorage.getItem('at','aa')
 }
}
