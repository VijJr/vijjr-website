import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Course, DISCIPLINES, Discipline, DisciplineInfo, SHIPPED_TITLES, TITLES_AS_OF, Work,
  coursesFor, discipline, linkedInto, workFor,
} from '../../data/portfolio';

const SECTION_LABELS: Record<Discipline, { experience: string; projects: string }> = {
  software: { experience: 'Experience', projects: 'Projects' },
  games: { experience: 'Experience', projects: 'Projects & showreel' },
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
  readonly cvLinked: Work[];
  readonly otherLinked: Work[];
  readonly cvCount: number;
  readonly courses: Course[];
  readonly next: DisciplineInfo;
  readonly titles = SHIPPED_TITLES;
  readonly titlesAsOf = TITLES_AS_OF;

  constructor(route: ActivatedRoute) {
    // Each discipline has its own route config, so the component is recreated per discipline.
    const id = route.snapshot.data['discipline'] as Discipline;
    const own = workFor(id);
    const linked = linkedInto(id);

    this.info = discipline(id);
    this.labels = SECTION_LABELS[id];
    this.experience = own.filter(w => w.type === 'experience');
    this.projects = own.filter(w => w.type === 'project');
    this.cvLinked = linked.filter(w => w.cv);
    this.otherLinked = linked.filter(w => !w.cv);
    this.cvCount = own.filter(w => w.cv).length;
    this.courses = coursesFor(id);
    this.next = DISCIPLINES[(DISCIPLINES.indexOf(this.info) + 1) % DISCIPLINES.length];
  }
}
