import { dvh_HeroService } from './../hero.service';
import { DvhHero } from './../dvh-hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dvh_hero : DvhHero[] = [];
  constructor(private dvh_heroService: dvh_HeroService) { }

  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(): void {
    this.dvh_heroService.get_dvh_Heroes()
      .subscribe(dvh_hero => this.dvh_hero = dvh_hero.slice(1, 5));
  }
}
