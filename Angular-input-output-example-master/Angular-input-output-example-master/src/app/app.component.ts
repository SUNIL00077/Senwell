import {Component} from '@angular/core';
import {OddComponent} from './odd/odd.component';
import {EvenComponent} from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onIntervalFired(incrementNumber: number) {
    console.log(incrementNumber);
  }

  onNumberAdded(incrementNumber: number) {
    if (incrementNumber % 2 !== 0) {
      this.oddNumbers.push({
        number: incrementNumber
      });
    } else {
      this.evenNumbers.push({
        number: incrementNumber
      });
    }
  }
}

