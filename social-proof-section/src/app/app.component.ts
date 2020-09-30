import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-social-proof-section';

  numSequence(n: number): Array<number> {
    return Array(n);
  } 
}
