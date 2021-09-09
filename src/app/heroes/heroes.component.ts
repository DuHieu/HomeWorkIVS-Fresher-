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

  dvh_hero: DvhHero = {
    dvh_id: 1,
    dvh_name: 'DuVanHieu'
  };

  // list hero
  //dvh_list_hero = HEROES;

  //
  selectedHero?: DvhHero;
  //
  dvh_list_hero: DvhHero[] = [];
  // dvh_hero = 'Windstorm';

  constructor(private dvh_heroService: dvh_HeroService, private dvh_messageService: MessageService) { }

  ngOnInit(): void {
    this.get_dvh_Heroes();
  }
  onSelect(dvh_hero: DvhHero): void {
    this.selectedHero = dvh_hero;
    this.dvh_messageService.add(`HeroesComponent: Selected hero ${dvh_hero.dvh_name}`);
    }
    get_dvh_Heroes(): void {
      this.dvh_heroService.get_dvh_Heroes().subscribe(dvh_list_hero => this.dvh_list_hero = dvh_list_hero);

    }
}
