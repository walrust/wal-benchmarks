import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-component1',
  templateUrl: './nested-component1.component.html'
})
export class NestedComponent1Component {
  @Input() counter!: number;
}
