import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IItemListState } from '../../interfaces/items.interface';
import { removeItemList } from '../../actions/item-list.actions';

@Component({
  selector: 'app-finish-screen',
  templateUrl: './finish-screen.component.html',
  styleUrls: ['./finish-screen.component.scss']
})
export class FinishScreenComponent implements OnInit {

    constructor(
        private _store: Store<IItemListState>
    ) { }

    ngOnInit(): void {
        this._store.dispatch(removeItemList()); 
    }
}
