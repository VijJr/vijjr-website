import { Component } from '@angular/core';
import { HONORS, honorsByTerm } from '../../data/portfolio';

/** Term-by-term strip of academic honors. */
@Component({
  selector: 'app-honors',
  template: `
    <ol class="terms">
      <li class="term" *ngFor="let t of terms">
        <span class="term-label">{{ t.label }}</span>
        <ul>
          <li *ngFor="let h of t.honors" [attr.data-kind]="kind(h.name)">{{ h.name }}</li>
        </ul>
      </li>
    </ol>
    <p class="tally">
      <span><b>{{ count('University Honors') }}×</b> University Honors</span>
      <span><b>{{ count('Dean’s List') }}×</b> Dean’s List</span>
      <span><b>James B. Angell</b> Scholar</span>
    </p>
  `,
  styles: [`
    :host { display: block; }
    .terms {
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
      border-top: 1px solid var(--line); border-left: 1px solid var(--line);
    }
    .term {
      display: flex; flex-direction: column; gap: 12px;
      padding: 14px 14px 16px; min-height: 112px;
      border-right: 1px solid var(--line); border-bottom: 1px solid var(--line);
    }
    .term-label { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
    .term ul { display: grid; gap: 7px; }
    .term ul li { display: flex; align-items: center; gap: 8px; font-size: 13.5px; line-height: 1.3; }
    .term ul li::before { content: ''; flex: none; width: 8px; height: 8px; background: var(--ink); }
    .term ul li[data-kind="dl"]::before { background: transparent; box-shadow: inset 0 0 0 1.5px var(--ink); }
    .term ul li[data-kind="angell"]::before { background: var(--rb); transform: rotate(45deg); }
    @media (max-width: 520px) { .terms { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    .tally { display: flex; flex-wrap: wrap; gap: 6px 22px; margin-top: 16px; font-size: 14px; color: var(--muted); }
    .tally b { color: var(--ink); font-weight: 550; }
  `],
})
export class HonorsComponent {
  readonly terms = honorsByTerm();

  kind(name: string): string {
    if (name.startsWith('Dean')) return 'dl';
    if (name.includes('Angell')) return 'angell';
    return 'uh';
  }

  count(name: string): number {
    return HONORS.filter(h => h.name === name).length;
  }
}
