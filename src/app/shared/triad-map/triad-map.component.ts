import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DISCIPLINES, Discipline, Shape, Work, discipline, workCode } from '../../data/portfolio';

interface Point { work: Work; x: number; y: number; code: string; shape: Shape; }

const W = 400;
const H = 372;

/** Equilateral triangle: Software at the top, Games bottom-left, Robotics bottom-right. */
const VERTEX: Record<Discipline, [number, number]> = {
  software: [200, 44],
  games: [40, 321],
  robotics: [360, 321],
};
const CENTER: [number, number] = [200, (44 + 321 + 321) / 3];

/** How far a single-discipline entry sits from the centroid toward its vertex (1 = on the vertex). */
const PULL = 0.72;
/** Spacing of the sunflower spiral used to fan out entries that share a position. */
const SPREAD = 10.5;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const LINKED_WEIGHT = 0.5;

/**
 * Ternary plot of every work entry. Each point is placed by barycentric weights
 * (primary discipline = 1, each cross-linked discipline = 0.5), so cross-linked work,
 * like the computer-vision research, visibly sits between disciplines.
 */
@Component({
  selector: 'app-triad-map',
  templateUrl: './triad-map.component.html',
  styleUrls: ['./triad-map.component.css']
})
export class TriadMapComponent implements OnChanges {
  @Input({ required: true }) items!: Work[];
  @Input() highlight: Discipline | null = null;

  readonly W = W;
  readonly H = H;
  readonly vertex = VERTEX;
  readonly disciplines = DISCIPLINES;
  readonly frame = this.polygon([VERTEX.software, VERTEX.games, VERTEX.robotics]);
  readonly medial = this.polygon([
    this.mid(VERTEX.software, VERTEX.games),
    this.mid(VERTEX.games, VERTEX.robotics),
    this.mid(VERTEX.robotics, VERTEX.software),
  ]);
  readonly center = CENTER;
  readonly labels: Record<Discipline, { x: number; y: number; anchor: string }> = {
    software: { x: 200, y: 18, anchor: 'middle' },
    games: { x: 22, y: 354, anchor: 'start' },
    robotics: { x: 378, y: 354, anchor: 'end' },
  };

  points: Point[] = [];
  active: Point | null = null;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) this.points = this.layout(this.items);
  }

  disciplinesOf(w: Work): Discipline[] {
    return [w.primary, ...(w.also ?? [])];
  }

  isDim(p: Point): boolean {
    return !!this.highlight && !this.disciplinesOf(p.work).includes(this.highlight);
  }

  isVertexOn(d: Discipline): boolean {
    if (this.active) return this.disciplinesOf(this.active.work).includes(d);
    return this.highlight === d;
  }

  open(p: Point): void {
    this.router.navigate(['/work', p.work.id]);
  }

  go(d: Discipline): void {
    this.router.navigate(['/' + d]);
  }

  private layout(items: Work[]): Point[] {
    const occupied = new Map<string, number>();
    return items.map(work => {
      const weights: [Discipline, number][] = [
        [work.primary, 1],
        ...(work.also ?? []).map(d => [d, LINKED_WEIGHT] as [Discipline, number]),
      ];
      const total = weights.reduce((sum, [, w]) => sum + w, 0);
      let x = weights.reduce((sum, [d, w]) => sum + VERTEX[d][0] * w, 0) / total;
      let y = weights.reduce((sum, [d, w]) => sum + VERTEX[d][1] * w, 0) / total;
      x = CENTER[0] + (x - CENTER[0]) * PULL;
      y = CENTER[1] + (y - CENTER[1]) * PULL;

      // Fan out entries that land on the same spot along a sunflower spiral.
      const key = `${Math.round(x)}:${Math.round(y)}`;
      const n = occupied.get(key) ?? 0;
      occupied.set(key, n + 1);
      if (n > 0) {
        const r = SPREAD * Math.sqrt(n);
        x += r * Math.cos(n * GOLDEN_ANGLE);
        y += r * Math.sin(n * GOLDEN_ANGLE);
      }

      return { work, x, y, code: workCode(work), shape: discipline(work.primary).shape };
    });
  }

  private polygon(pts: [number, number][]): string {
    return pts.map(p => p.join(',')).join(' ');
  }

  private mid(a: [number, number], b: [number, number]): [number, number] {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  }
}
