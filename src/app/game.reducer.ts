import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, addPoints } from './game.actions';

export interface State {
  moves: number;
  points: number;
} 

export const initialState: State = {
  moves: 0,
  points: 0
};

export const gameReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, moves: state.moves + 1 })),
  on(decrement, (state) => ({ ...state, moves: state.moves - 1 })),
  on(reset, () => ({ moves: 0, points: 0 })),
  on(addPoints, (state) => ({ ...state, points: state.points + 10 }))
);