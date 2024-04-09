import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {
  constructor() {}

  public characters: Character[] = [
    {
      name: 'Monkey D Luffy',
      reward: 300,
    },
    {
      name: 'Roronoa Zoro',
      reward: 160,
    },
    {
      name: 'Vinsmoke Sanji',
      reward: 75,
    },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  public deleteCharacter(id: string): void {
    this.characters.filter((character) => character.id !== id);
  }
}
