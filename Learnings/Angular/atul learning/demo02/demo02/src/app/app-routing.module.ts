import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { Comp4Component } from './comp/comp4/comp4.component';
import { Comp5Component } from './comp/comp5/comp5.component';
import { ErrorComponent } from './comp/error/error.component';

const routes: Routes = [
  {path:'app5',component:Comp5Component},
  {path:'app4',component:Comp4Component},
  {path:'app1',component:Comp1Component},
  {path:'app2',component:Comp2Component},
  {path:'app3',component:Comp3Component},

  {path:'app5/:name', component:Comp5Component},

  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
