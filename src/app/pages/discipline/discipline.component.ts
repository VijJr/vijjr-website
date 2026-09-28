import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DISCIPLINES, Discipline, DisciplineInfo, SHIPPED_TITLES, TITLES_AS_OF, Work,
  discipline, linkedInto, workFor,
} from '../../data/portfolio';

const SECTION_LABELS: Record<Discipline, { experience: string; projects: string }> = {
  software: { experience: 'Experience', projects: 'Projects' },
  games: { experience: 'Experience', projects: 'Projects' },
  robotics: { experience: 'Research & teams', projects: 'Builds' },
};

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent {
  readonly info: DisciplineInfo;
  readonly labels: { experience: string; projects: string };
  readonly experience: Work[];
  readonly projects: Work[];
  readonly linked: Work[];
  readonly next: DisciplineInfo;
  readonly titles = SHIPPED_TITLES;
  readonly titlesAsOf = TITLES_AS_OF;

  constructor(route: ActivatedRoute) {
    // Each discipline has its own route config, so the component is recreated per discipline.
    const id = route.snapshot.data['discipline'] as Discipline;
    const own = workFor(id);

    this.info = discipline(id);
    this.labels = SECTION_LABELS[id];
    this.experience = own.filter(w => w.type === 'experience');
    this.projects = own.filter(w => w.type === 'project');
    this.linked = linkedInto(id);
    this.next = DISCIPLINES[(DISCIPLINES.indexOf(this.info) + 1) % DISCIPLINES.length];
  }
}
