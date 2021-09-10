import { MessageService } from './../message.service';
import { dvh_HeroService } from './../hero.service';
import { DvhHero } from './../dvh-hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // dvh_hero: DvhHero = {
  //   dvh_id: 1,
  //   dvh_name: 'DuVanHieu'
  // };


  dvh_list_hero: DvhHero[] = [];

  constructor(private dvh_heroService: dvh_HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.dvh_heroService.get_dvh_Heroes()
    .subscribe(dvh_list_hero => this.dvh_list_hero = dvh_list_hero);
  }
}
