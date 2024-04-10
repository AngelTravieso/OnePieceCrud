import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class OnePieceService {

  public characters: Character[] = [];

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
