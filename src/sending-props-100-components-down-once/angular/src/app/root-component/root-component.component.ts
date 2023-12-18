import { Component } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
})
export class RootComponentComponent {
  value = 0;

  onClick() {
    this.value += 1;
  }
}
