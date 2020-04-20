import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];        
  selectedHero: Hero;     // definition declaration

  // When Angular creates a HeroesComponent, 
  // the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeros(): void {
  //   this.heroes = this.heroService.getHeros();
  // }
  // call asynchronis version
  getHeros(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
}
