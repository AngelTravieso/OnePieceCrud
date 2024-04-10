import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [AppComponent, ListCharactersComponent, AddCharacterComponent],
  imports: [BrowserModule, CommonModule, FormsModule, CdkDropList ,CdkDrag],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
