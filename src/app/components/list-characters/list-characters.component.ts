import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls:['./list-characters.css'],
})
export class ListCharactersComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public emitDeleteCharacter(id?: string): void {

    if(!id) return;

    this.onDeleteCharacter.emit(id);
  }

  public drop(event: CdkDragDrop<Character[]>): void {
    moveItemInArray(this.characters, event.previousIndex, event.currentIndex);
  }
}
