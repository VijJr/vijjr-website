import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ACTIVITIES, COURSES, Course, DISCIPLINES, Discipline, HONORS, PROFILE, RECOGNITION, Recognition,
} from '../../data/portfolio';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly disciplines = DISCIPLINES;
  readonly recognition = RECOGNITION;
  readonly activities = ACTIVITIES;
  readonly honors = [...HONORS].reverse();

  filter: Discipline | 'all' = 'all';
  cert: Recognition | null = null;

  @ViewChild('certDialog') private certDialog?: ElementRef<HTMLDialogElement>;

  get courses(): Course[] {
    const f = this.filter;
    return f === 'all' ? COURSES : COURSES.filter(c => c.disciplines.includes(f));
  }

  formatDate(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  }

  openCert(r: Recognition): void {
    this.cert = r;
    this.certDialog?.nativeElement.showModal();
  }

  closeCert(): void {
    this.certDialog?.nativeElement.close();
  }

  /** Clicking the backdrop (the dialog element itself, outside its content) closes it. */
  onDialogClick(event: MouseEvent): void {
    if (event.target === this.certDialog?.nativeElement) this.closeCert();
  }
}
