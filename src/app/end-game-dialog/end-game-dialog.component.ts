import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../game.reducer';

@Component({
  selector: 'app-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.scss']
})
export class EndGameDialogComponent {
  game$: Observable<State>;

  constructor(private store: Store<{ game: State }>) {
    this.game$ = store.select('game')
  }
}
