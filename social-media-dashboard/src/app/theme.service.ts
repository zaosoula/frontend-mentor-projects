import { Injectable } from '@angular/core';

export const globalTheme = {
  'lime-green': 'hsl(163, 72%, 41%)',
  'bright-red': 'hsl(356, 69%, 56%)',
  facebook: 'hsl(208, 92%, 53%)',
  twitter: 'hsl(203, 89%, 53%)',
  instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
  youtube: 'hsl(348, 97%, 39%)',
};
export const darkTheme = {
  bg: 'hsl(230, 17%, 14%)',
  'card-bg': 'hsl(228, 28%, 20%)',
  primary: 'hsl(228, 34%, 66%)',
  secondary: 'hsl(0, 0%, 100%)',
  'switch-bg': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
  'top-bg': 'hsl(232, 19%, 15%)',
};

export const lightTheme = {
  bg: 'hsl(0, 0%, 100%)',
  'card-bg': 'hsl(227, 47%, 96%)',
  primary: 'hsl(228, 12%, 44%)',
  secondary: 'hsl(230, 17%, 14%)',
  'switch-bg': 'hsl(230, 22%, 74%)',
  'top-bg': 'hsl(225, 100%, 98%)',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(globalTheme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, globalTheme[k])
    );
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
