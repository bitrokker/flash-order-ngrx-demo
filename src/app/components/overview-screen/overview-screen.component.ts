import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IItem, IItemListState } from '../../interfaces/items.interface';
import { selectItemList } from '../../selectors/item-list.selectors';

@Component({
  selector: 'overview-screen',
  templateUrl: './overview-screen.component.html',
  styleUrls: ['./overview-screen.component.scss']
})
export class OverviewScreenComponent implements OnInit, OnDestroy {
    // PRIVATE PROPERTIES
    private _sub: Subscription = Subscription.EMPTY;

    // PRIVATE PROPERTIES
    public itemList: Array<IItem> = new Array<IItem>();
    public get totalOrderPrice(): number { return this._getTotalOrderPrice(); };

    constructor(      
        private _store: Store<IItemListState>
    ) { }    

    ngOnInit(): void { 
        this._initSubscriber();
    }

    ngOnDestroy(): void {        
        this._sub.unsubscribe();       
    }

    /**
     * methode initalisiert subscriber
     * @returns 
     */
    private _initSubscriber(): void {
        this._sub = this._store.pipe(select(selectItemList)).subscribe((value: Array<IItem>) => {
            this.itemList = [...value]; 
        });
    }

    /**
     * Methode berechnet den totalen Preis für die Auswahl.
     */
    private _getTotalOrderPrice(): number {
        let total: number = 0; 
        for(let item of this.itemList) {
            if(item.isSelected) {
                total += item.price;
            }
        }

        return +this._roundFixBetrag(total);
    }

    /**
     * Methode rundet und fixt den Betag auf 2 Stellen hintern dem Komma.
     * @param value 
     */
    private _roundFixBetrag(value: number): string {
        return (Math.round(value * 100) / 100).toFixed(2);
    }
}
