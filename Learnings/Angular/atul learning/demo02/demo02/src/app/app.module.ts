import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { Comp4Component } from './comp/comp4/comp4.component';
import { Comp5Component } from './comp/comp5/comp5.component';
import { ErrorComponent } from './comp/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
