import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input() public social: string;
  @Input() public value: string;
  @Input() public label: string;
  @Input() public grow: string;
  @Input() public growDirection: string;
  constructor() { }

  ngOnInit(): void {
  }

}
