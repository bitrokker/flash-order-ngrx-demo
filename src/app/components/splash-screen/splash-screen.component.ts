import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit, OnDestroy {

  // privates
  private splashInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.splashInterval = setInterval(() => { this.routeNextScreen(); }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.splashInterval);
  }

  /**
   * Metthode routet zum nächsten screen.
   */
  private routeNextScreen(): void {
    this.router.navigate(['order']);
  }


}
