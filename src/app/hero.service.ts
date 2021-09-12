import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { DvhHero } from './dvh-hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class dvh_HeroService {

  constructor(private messageService: MessageService,
    private http: HttpClient,
    ) { }
   private log(message: string){
     this.messageService.add(`HeroService: ${message}`);
   }
   private heroesUrl = 'api/heroes';


  get_dvh_Heroes(): Observable<DvhHero[]>{
    // const dvh_list_hero = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
    return this.http.get<DvhHero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<DvhHero[]>('getHeroes', []))
    );
  }


  getHero(id: number): Observable<DvhHero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<DvhHero>(url).pipe(
      tap(_ => this.log(`fetched hero id = ${id}`))
      ,catchError(this.handleError<DvhHero>(`get Hero id = ${id}`))

    );
    //   const hero = HEROES.find(h => h.dvh_id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);
  }
    // getHeroNo404<Data>(id: number): Observable<DvhHero> {
    //   const url = `${this.heroesUrl}/?id=${id}`;
    //   return this.http.get<DvhHero[]>(url)
    //     .pipe(
    //       map(heroes => heroes[0]), // returns a {0|1} element array
    //       tap(h => {
    //         const outcome = h ? `fetched` : `did not find`;
    //         this.log(`${outcome} hero id=${id}`);
    //       }),
    //       catchError(this.handleError<DvhHero>(`getHero id=${id}`))
    //     );
    // }


   private handleError<T>(operation = 'operation', result?:T){
     return (error:any ): Observable<T> =>{
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
     }

   }
  }
