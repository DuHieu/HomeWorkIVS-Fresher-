import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { DvhHero } from './dvh-hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class dvh_HeroService {

  constructor(private messageService: MessageService) { }
  get_dvh_Heroes(): Observable<DvhHero[]>{
    const dvh_list_hero = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return dvh_list_hero;
  }

  getHero(id: number): Observable<DvhHero> {

    const dvh_hero = HEROES.find(h => h.dvh_id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(dvh_hero);
  }
}
