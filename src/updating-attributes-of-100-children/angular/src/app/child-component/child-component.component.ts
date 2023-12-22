import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html'
})
export class ChildComponentComponent {
  @Input() value!: number;
}
