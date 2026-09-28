import { Component, ElementRef, ViewChild } from '@angular/core';
import { ACTIVITIES, COURSES, PROFILE, RECOGNITION, Recognition } from '../../data/portfolio';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly courses = COURSES;
  readonly recognition = RECOGNITION;
  readonly activities = ACTIVITIES;

  cert: Recognition | null = null;

  @ViewChild('certDialog') private certDialog?: ElementRef<HTMLDialogElement>;

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
