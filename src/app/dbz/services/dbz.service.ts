import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: v4(), nombre: 'Krilin', power: 1500 },
    { id: v4(), nombre: 'Goku', power: 5000 },
  ];

  public handleNewCharacter = (character: Character): void => {
    this.characters.push({ id: v4(), ...character });
  };

  public handleDeleteCharacterByID = (id: string): void => {
    this.characters = this.characters.filter((element) => element.id !== id);
  };
}
