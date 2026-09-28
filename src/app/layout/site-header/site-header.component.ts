import { Component } from '@angular/core';
import { DISCIPLINES, PROFILE } from '../../data/portfolio';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  readonly disciplines = DISCIPLINES;
  readonly profile = PROFILE;
  theme: Theme = this.initialTheme();

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset['theme'] = this.theme;
    try { localStorage.setItem(STORAGE_KEY, this.theme); } catch { /* storage unavailable */ }
  }

  /** Mirrors the inline script in index.html that applies the theme before first paint. */
  private initialTheme(): Theme {
    const set = document.documentElement.dataset['theme'];
    if (set === 'light' || set === 'dark') return set;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
