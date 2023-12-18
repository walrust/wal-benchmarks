import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html'
})
export class NestedComponentComponent {
  @Input() counter!: number;
  @Input() value!: number;
}
