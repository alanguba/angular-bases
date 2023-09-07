import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Superman', 'Flash', 'Thor'];
  public deletedHero?: string = '';

  public removeLastHero = (): void => {
    this.deletedHero = this.heroes.pop();
  };
}
