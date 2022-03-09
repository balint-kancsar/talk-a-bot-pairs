import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as reducer from './game.reducer';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EndGameDialogComponent } from './end-game-dialog/end-game-dialog.component';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EndGameDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    StoreModule.forRoot({ game: reducer.gameReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
