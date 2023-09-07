import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroeDescription = (): string => {
    return `${this.name} - ${this.age} anios`;
  };

  public changeHeroe = (): void => {
    this.name = 'Spiderman';
  };

  public changeAge = (): void => {
    this.age = 25;
  };

  public reset = (): void => {
    this.name = 'Ironman';
    this.age = 45;
  };
}
