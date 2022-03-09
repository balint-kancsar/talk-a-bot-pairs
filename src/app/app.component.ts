import { Component, OnInit } from '@angular/core';
import { CardData } from './card-data.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, reset, addPoints } from './game.actions';
import { State } from './game.reducer';
import { MatDialog } from '@angular/material/dialog';
import { EndGameDialogComponent } from './end-game-dialog/end-game-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  game$: Observable<State>;

  cardImages = Array.from(Array(10).keys());

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  shuffleArray(anArray: any[]): any[] {
    return anArray.map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(
    private store: Store<{ game: State }>,
    private dialog: MatDialog
  ) {
    this.game$ = store.select('game');
  }

  ngOnInit(): void {
    this.setup();
  }

  setup(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push(...[{ ...cardData }, { ...cardData }]);

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const currentCard = this.cards[index];
    this.store.dispatch(increment())

    if (currentCard.state === 'default' && this.flippedCards.length < 2) {
      currentCard.state = 'flipped';
      this.flippedCards.push(currentCard);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (currentCard.state === 'flipped') {
      currentCard.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const [cardOne, cardTwo] = this.flippedCards;
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.store.dispatch(addPoints())
      }

      if (this.cards.every(({ state }) => state === 'matched')) {
        this.openDialog()
      }

    }, 1000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EndGameDialogComponent)

    dialogRef.afterClosed().subscribe(() => {
      this.restart()
    })
  }

  restart(): void {
    this.setup();
    this.store.dispatch(reset())
  }

}