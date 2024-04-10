import { Component } from '@angular/core';

import { Character } from './interfaces/character.interface';
import { OnePieceService } from './services/one-piece.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'One Piece - CRUD';

  constructor(private readonly onePieceService: OnePieceService) {}

  public addNewCharacter(character: Character): void {
    this.onePieceService.addCharacter(character);
  }

  public deleteCharacter(id: string): void {
    this.onePieceService.deleteCharacter(id);
  }

  get characters(): Character[] {
    return this.onePieceService.characters;
  }

}
