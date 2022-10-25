import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { itemListFeatureKey, itemListReducer } from '../reducers/item-list.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(itemListFeatureKey, itemListReducer)
  ]
})
export class StoreFeatureModule { }
