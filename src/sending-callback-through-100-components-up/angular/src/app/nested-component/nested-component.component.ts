import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html'
})
export class NestedComponentComponent {
  @Input() depth!: number;
  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
