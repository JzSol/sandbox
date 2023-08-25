import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sandbox';
}

class Animal {
  constructor(public name: string) {}

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Snake extends Animal {
  slither(distance: number) {
    console.log(`${this.name} is slithering...`);
    super.move(distance);
  }
}
new Snake('da');
