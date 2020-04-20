import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';

// You must make the HeroService available to the dependency injection system before Angular 
// can inject it into the HeroesComponent by registering a provider. A provider is something 
// that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

// To make sure that the HeroService can provide this service, register it with the injector, 
// which is the object that is responsible for choosing and injecting the provider where the app requires it.
// When you provide the service at the root level, Angular creates a single, shared instance of HeroService 
// and injects into any class that asks for it.

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  // getHeros(): Hero[] {
  //   return HEROES;
  // }
 
// HeroService.getHeroes() must have an asynchronous signature of some kind.
// In this tutorial, HeroService.getHeroes() will return an Observable because 
// it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() 
// returns an Observable.
  getHeros(): Observable<Hero[]> {
    return of (HEROES);
  }
}
