import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';


const dvh_routes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroesDetailComponent},

  {path: 'heroes', component: HeroesComponent}

]
@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(dvh_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
