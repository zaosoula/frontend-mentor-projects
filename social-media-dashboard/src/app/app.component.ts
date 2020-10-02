import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private title: string = 'social-media-dashboard';

  constructor(private themeService: ThemeService) {
    this.themeService.toggleLight();
  }

  themeChange(darkMode) {
    if (darkMode) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
  }

}
