import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public emitDeleteCharacter(id?: string): void {

    console.log(id)

    if(!id) return;

    this.onDeleteCharacter.emit(id);
  }
}
