import { Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Output() switch: EventEmitter<boolean> = new EventEmitter();
  private state = false;

  constructor() { }

  ngOnInit(): void {}

  public emitChange(event) {
    this.state = !this.state;
    this.switch.emit(this.state);
  }


}
