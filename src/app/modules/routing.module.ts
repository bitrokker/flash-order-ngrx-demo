import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationScreenComponent } from '../components/confirmation-screen/confirmation-screen.component';
import { OrderScreenComponent} from '../components/order-screen/order-screen.component';
import { SplashScreenComponent } from '../components/splash-screen/splash-screen.component';
import { OverviewScreenComponent} from '../components/overview-screen/overview-screen.component';
import { FinishScreenComponent } from '../components/finish-screen/finish-screen.component';


const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'order', component: OrderScreenComponent },
  { path: 'overview', component: OverviewScreenComponent },
  { path: 'confirmed', component: ConfirmationScreenComponent },
  { path: 'finish', component: FinishScreenComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
