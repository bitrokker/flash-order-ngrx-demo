import { createAction, props } from '@ngrx/store';
import { IItem } from '../interfaces/items.interface';

export const addItemList = createAction(
  '[ItemList] Add Item List',
  (itemList: Array<IItem>) => ({ itemList })
);

export const toggleCheckItemList = createAction(
    '[ItemList] Toggle Check Item List',
    props<{ id: number }>()
);

export const removeItemList = createAction(
    '[ItemList] Remove Item List'
);
