import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//paginas
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
{ path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent},
{ path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
