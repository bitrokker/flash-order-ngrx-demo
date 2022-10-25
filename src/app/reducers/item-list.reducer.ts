import { Action, createReducer, on } from '@ngrx/store';
import { IItem, IItemListState } from '../interfaces/items.interface';
import { addItemList, removeItemList, toggleCheckItemList } from '../actions/item-list.actions';

export const itemListFeatureKey = 'itemList';

export const initialState: IItemListState = {
    itemList: new Array<IItem>()
};

export const itemListReducer = createReducer(
    initialState,
    on(
        addItemList,
        (state: IItemListState, { itemList }) => {
            return {...state, itemList: itemList }
        }
    ),
    on(
        toggleCheckItemList,
        (state: IItemListState, { id }) => { 
            let cloneState = <IItemListState>JSON.parse(JSON.stringify(state));
            let item = cloneState.itemList.find(x => x.id === id);
            item!.isSelected = item!.isSelected ? false : true; // toggle selection check
        
            return { ...cloneState };
        }
    ),
    on(
        removeItemList,
        (state, action) => {
            return { itemList: new Array<IItem>() }
        }
    )
);
