import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { IItem } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

    private _itemUrl = "assets/data/products.json";

    constructor(
        private _http: HttpClient
    ) { }

    /**
     * Methode liefert die Item Daten vom Json als HTTP Request.
     * @returns 
     */
    public getAllItems(): Observable<Array<IItem>> {
        return this._http.get<Array<IItem>>(this._itemUrl);
    }
}
