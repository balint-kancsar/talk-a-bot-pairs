import { createAction } from '@ngrx/store';

export const increment = createAction('[Game Component] Increment');
export const decrement = createAction('[Game Component] Decrement');
export const reset = createAction('[Game Component] Reset');
export const addPoints = createAction('[Game Component] AddPoints');