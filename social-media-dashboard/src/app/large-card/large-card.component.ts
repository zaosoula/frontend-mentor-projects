import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss']
})
export class LargeCardComponent implements OnInit {
  @Input() public social: string;
  @Input() public name: string;
  @Input() public value: string;
  @Input() public label: string;
  @Input() public grow: string;
  @Input() public growDirection: string;
  constructor() { }

  ngOnInit(): void {
  }

}
