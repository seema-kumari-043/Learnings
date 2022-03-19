import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor(
    private rout:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  fun1(){
    console.log(this.rout.snapshot.params['name']);
  }

}
