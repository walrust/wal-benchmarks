import { Component } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './for-component.component.html',
})
export class ForComponentComponent {
  dummyArray = Array(0);

  onClick() {
    this.dummyArray.push(null);
  }
}
