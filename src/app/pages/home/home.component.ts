import { Component } from '@angular/core';
import { DISCIPLINES, Discipline, DisciplineInfo, HOME_STATS, PROFILE, WORK, Work, workFor } from '../../data/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly profile = PROFILE;
  readonly stats = HOME_STATS;
  readonly disciplines = DISCIPLINES;
  readonly work = WORK;
  readonly featured = this.interleaveFeatured();

  /** Discipline under the pointer in the hero or index; dims unrelated points on the map. */
  highlight: Discipline | null = null;

  phraseHead(d: DisciplineInfo): string { return d.phrase.split(' ')[0]; }
  phraseTail(d: DisciplineInfo): string { return d.phrase.split(' ').slice(1).join(' '); }

  /** Featured work ordered Software, Games, Robotics, Software, ... so the grid reads evenly. */
  private interleaveFeatured(): Work[] {
    const lanes = DISCIPLINES.map(d => workFor(d.id).filter(w => w.featured));
    const out: Work[] = [];
    for (let i = 0; lanes.some(l => i < l.length); i++) {
      for (const lane of lanes) if (lane[i]) out.push(lane[i]);
    }
    return out;
  }
}
