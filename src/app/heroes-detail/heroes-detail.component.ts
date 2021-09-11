import { dvh_HeroService } from './../hero.service';
import { DvhHero } from './../dvh-hero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// quen import
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  hero: DvhHero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: dvh_HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goback(){
    this.location.back();
  }
  update(){

  }
}
