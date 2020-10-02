import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
