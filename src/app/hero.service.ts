import { HEROES } from './mock-heroes';
import { DvhHero } from './dvh-hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dvh_HeroService {

  constructor() { }
  get_dvh_Heroes(): Observable<DvhHero[]>{
    const dvh_list_hero = of(HEROES);
    return dvh_list_hero;
  }
}
