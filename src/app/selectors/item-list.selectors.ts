import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IItemListState } from '../interfaces/items.interface';
import { itemListFeatureKey } from '../reducers/item-list.reducer';

export const selectItemListState = createFeatureSelector<IItemListState>(itemListFeatureKey);
export const selectItemList = createSelector(selectItemListState, (state: IItemListState) => state.itemList);