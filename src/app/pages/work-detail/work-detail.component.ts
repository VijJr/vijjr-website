import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  DisciplineInfo, SHIPPED_TITLES, TITLES_AS_OF, Work, discipline, workById, workCode, workFor,
} from '../../data/portfolio';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnDestroy {
  work!: Work;
  info!: DisciplineInfo;
  code = '';
  linked: DisciplineInfo[] = [];
  prev?: Work;
  next?: Work;
  related: Work[] = [];

  readonly titles = SHIPPED_TITLES;
  readonly titlesAsOf = TITLES_AS_OF;

  private readonly sub: Subscription;

  constructor(route: ActivatedRoute, private router: Router, private title: Title) {
    // Navigating between entries reuses this component, so follow the param stream.
    this.sub = route.paramMap.subscribe(params => this.load(params.get('id') ?? ''));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  pad(n: number): string {
    return String(n + 1).padStart(2, '0');
  }

  private load(id: string): void {
    const work = workById(id);
    if (!work) {
      this.router.navigate(['/']);
      return;
    }
    const siblings = workFor(work.primary);
    const i = siblings.indexOf(work);

    this.work = work;
    this.info = discipline(work.primary);
    this.code = workCode(work);
    this.linked = (work.also ?? []).map(discipline);
    this.prev = siblings[i - 1];
    this.next = siblings[i + 1];
    this.related = siblings.filter(w => w !== work && w.type === work.type).slice(0, 3);
    this.title.setTitle(`${work.title} · Vijay Ravi`);
  }
}
