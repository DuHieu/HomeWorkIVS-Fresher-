import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    MessageComponent,
    DashboardComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
