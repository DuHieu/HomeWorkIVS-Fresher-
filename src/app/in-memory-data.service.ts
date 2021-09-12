
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DvhHero } from './dvh-hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { dvh_id    : 11, dvh_name : 'Dr Nice' },
      { dvh_id    : 12, dvh_name: 'Narco' },
      { dvh_id    : 13, dvh_name: 'Bombasto' },
      { dvh_id    : 14, dvh_name: 'Celeritas' },
      { dvh_id    : 15, dvh_name: 'Magneta' },
      { dvh_id    : 16, dvh_name: 'RubberMan' },
      { dvh_id    : 17, dvh_name: 'Dynama' },
      { dvh_id    : 18, dvh_name: 'Dr IQ' },
      { dvh_id    : 19, dvh_name: 'Magma' },
      { dvh_id    : 20, dvh_name: 'Tornado' }
    ];
    return {heroes};
  }
  genId(heroes: DvhHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.dvh_id)) + 1 : 11;
  }
  constructor() { }
}
