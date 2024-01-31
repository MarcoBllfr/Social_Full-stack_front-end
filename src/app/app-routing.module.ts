import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersMessagesComponent } from './components/users-messages/users-messages.component';

const routes: Routes = [
  
{path:'' , component: HomeComponent, children:[
  {path:'', component: UsersMessagesComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
