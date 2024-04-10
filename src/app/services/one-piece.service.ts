import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Monkey D Luffy',
      reward: 300,
    },
    {
      id: uuid(),
      name: 'Roronoa Zoro',
      reward: 175,
    },
    {
      id: uuid(),
      name: 'Vinsmoke Sanji',
      reward: 73,
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
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
