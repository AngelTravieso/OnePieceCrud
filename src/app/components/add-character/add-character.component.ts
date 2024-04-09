import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    reward: 0,
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character = {
      name: '',
      reward: 0,
    };
  }
}
