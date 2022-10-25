import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confirmation-screen',
  templateUrl: './confirmation-screen.component.html',
  styleUrls: ['./confirmation-screen.component.scss']
})
export class ConfirmationScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Event wird ausgelöst wenn der timer abgelaufen ist
   * @param event
   */
  public onTimeIsUp(event: boolean): void {
    this.router.navigate(['finish']);
  }
}
