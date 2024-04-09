import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent, AddCharacterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
