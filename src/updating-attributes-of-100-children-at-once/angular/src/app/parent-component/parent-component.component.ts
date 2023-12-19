import { Component } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './parent-component.component.html',
})
export class ParentComponentComponent {
  value = 0;
  dummyArray = Array(100);

  onClick() {
    this.value += 1;
  }
}
