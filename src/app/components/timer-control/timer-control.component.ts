import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {

  // private
  private countdownInterval: any;

  // public
  public countdown: number = 5;

  // output
  @Output() timeIsUp: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.countdownInterval = setInterval(() => { this.setCountdownNumber(); }, 1000);
  }

  private setCountdownNumber(): void {
    this.countdown--;

    if(this.countdown === 0) {
      clearInterval(this.countdownInterval);
        this.timeIsUp.emit(true);
    }
  }
}
