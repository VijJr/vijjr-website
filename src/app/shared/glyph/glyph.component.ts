import { Component, HostBinding, Input } from '@angular/core';
import { Discipline, Shape, discipline } from '../../data/portfolio';

/** The mark for each discipline: Software ●, Games ■, Robotics ▲. */
@Component({
  selector: 'app-glyph',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <circle *ngIf="shape === 'circle'" cx="6" cy="6" r="5.6" />
      <rect *ngIf="shape === 'square'" x="0.6" y="0.6" width="10.8" height="10.8" />
      <polygon *ngIf="shape === 'triangle'" points="6,0.4 11.8,11.4 0.2,11.4" />
    </svg>
  `,
})
export class GlyphComponent {
  @Input({ required: true }) d!: Discipline;
  @Input() size = 12;

  @HostBinding('class') readonly hostClass = 'glyph';
  @HostBinding('attr.data-d') get dataD() { return this.d; }

  get shape(): Shape { return discipline(this.d).shape; }
}
