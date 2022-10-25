import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { OrderScreenComponent } from './components/order-screen/order-screen.component';
import { ConfirmationScreenComponent } from './components/confirmation-screen/confirmation-screen.component';
import { OverviewScreenComponent } from './components/overview-screen/overview-screen.component';
import { HeaderControlComponent } from './components/header-control/header-control.component';
import { FooterControlComponent } from './components/footer-control/footer-control.component';
import { TimerControlComponent } from './components/timer-control/timer-control.component';
import { FinishScreenComponent } from './components/finish-screen/finish-screen.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreFeatureModule } from '../app/modules/store-feature.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    OrderScreenComponent,
    ConfirmationScreenComponent,
    OverviewScreenComponent,
    HeaderControlComponent,
    FooterControlComponent,
    TimerControlComponent,
    FinishScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreFeatureModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
