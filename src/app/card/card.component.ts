import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from '../card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(-180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.01)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('500ms')
      ]),
      transition('flipped => default', [
        animate('500ms')
      ]),
      transition('* => matched', [
        animate('500ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() data: CardData = { imageId: 1, state: 'default' };

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}