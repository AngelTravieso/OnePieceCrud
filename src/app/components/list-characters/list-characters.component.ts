import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


import { Character } from 'src/app/interfaces/character.interface';

declare var bootstrap: any;

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls:['./list-characters.css'],
})
export class ListCharactersComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

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
