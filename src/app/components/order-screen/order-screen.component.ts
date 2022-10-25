import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, IItemListState } from '../../interfaces/items.interface';
import { select, Store } from '@ngrx/store'; 
import { addItemList, toggleCheckItemList } from '../../actions/item-list.actions';
import { Subscription, takeWhile } from 'rxjs';
import { selectItemList } from '../../selectors/item-list.selectors';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.scss']
})
export class OrderScreenComponent implements OnInit, OnDestroy {

    // PRIVATE PROPERTIES
    private _sub: Subscription = Subscription.EMPTY;

    // PUBLIC PROPERTIES
    public itemList: Array<IItem> = new Array<IItem>();
    public get isItemSelected(): boolean { return this._checkIsItemSelected(); };  

    constructor(
        private _store: Store<IItemListState>,
        private _dataApi: DataApiService
    ) { }    

    ngOnInit(): void {
        this._initSubscriber();       
    }

    ngOnDestroy(): void {
        this._destroySubscriber();
    }

    // PRIVATE METHODEN
    
    /**
     * methode initalisiert alle subscriber
     * @returns 
     */
    private _initSubscriber(): void {
        this._sub = this._store.pipe(select(selectItemList)).subscribe((items: Array<IItem>) => {
            this.itemList = [...items]; 
        });  

        const dataApiObs$ = this._dataApi.getAllItems().pipe(takeWhile(() => this.itemList === null || this.itemList.length === 0));
        dataApiObs$.subscribe((items: Array<IItem>) => {
            this._store.dispatch(addItemList(items));
        }); 
    }

    /**
     * Methode meldet alle subscriber aus dem sub array ab.
     * @returns 
     */
    private _destroySubscriber(): void {
        this._sub.unsubscribe();
    }

    /**
     * Methode prüft ob ein item selektiert wurde.
     */
    private _checkIsItemSelected(): boolean {
        if(!this.itemList || !this.itemList.length) return false;

        const isSelections = this.itemList.map(x => x.isSelected).filter(x => x); 
        return isSelections.length > 0;
    }

    // EVENTS

    /**
     * Event für den Klick auf ein Produkt.
     * @param id 
     */
    public onProductClick(id: number): void { 
        this._store.dispatch(toggleCheckItemList({id: id})); // check/uncheck item im store
    }
}
