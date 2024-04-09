import { Component } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { OnePieceService } from 'src/app/services/one-piece.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  constructor(private readonly onePieceService: OnePieceService) {}

  get characters(): Character[] {
    return [...this.onePieceService.characters];
  }

  public onDeleteCharacter(id: string): void {
    this.onePieceService.deleteCharacter(id);
  }
}
