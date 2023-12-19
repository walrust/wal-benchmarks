import { Component } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
})
export class RootComponentComponent {
  count = 0;

  handleButtonClick() {
    this.count++;
  }
}
