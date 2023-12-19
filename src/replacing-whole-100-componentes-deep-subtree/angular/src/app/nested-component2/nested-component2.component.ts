import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-component2',
  templateUrl: './nested-component2.component.html'
})
export class NestedComponent2Component {
  @Input() counter!: number;
}
