import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html',
    providers: [HeroService],
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) {}
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}


