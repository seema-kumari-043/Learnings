import { LogoutComponent } from './components/logout/logout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { OneserService } from './services/oneser.service';

const routes: Routes = [
  {
    path: '',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'logout',component:LogoutComponent,canActivate:[OneserService]
  }
  ,
  {
    path:'lists',component:UserlistComponent,canActivate:[OneserService]
  },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
