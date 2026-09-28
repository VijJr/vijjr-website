import { Component, Input } from '@angular/core';
import { Work, workCode } from '../../data/portfolio';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent {
  @Input({ required: true }) work!: Work;
  /** Show a thumbnail (or a generated poster when the entry has no video). */
  @Input() showMedia = false;

  get code(): string { return workCode(this.work); }
  get thumb(): string | undefined { return this.work.media?.[0]?.thumb; }
}
