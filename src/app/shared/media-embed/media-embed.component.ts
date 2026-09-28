import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Media } from '../../data/portfolio';

/** Click-to-play video: shows a poster and only loads the third-party player once asked. */
@Component({
  selector: 'app-media-embed',
  template: `
    <figure class="frame">
      <iframe *ngIf="src; else poster" [src]="src" [title]="media.title"
              allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <ng-template #poster>
        <button type="button" class="poster" (click)="play()" [attr.aria-label]="'Play video: ' + media.title">
          <img [src]="media.thumb" alt="" loading="lazy" decoding="async">
          <span class="play">
            <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1l7 4-7 4z" fill="currentColor"/></svg>
            Play
          </span>
        </button>
      </ng-template>
    </figure>
    <figcaption class="caption">{{ media.title }}</figcaption>
  `,
  styles: [`
    :host { display: block; }
    .frame {
      position: relative; margin: 0;
      aspect-ratio: 16 / 9;
      border-radius: var(--radius); overflow: hidden;
      background: #000; border: 1px solid var(--line);
    }
    iframe, .poster, .poster img { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    .poster img { object-fit: cover; opacity: .9; transition: transform .6s var(--ease), opacity .3s; }
    .poster:hover img { transform: scale(1.03); opacity: 1; }
    .play {
      position: absolute; left: 16px; bottom: 16px;
      display: inline-flex; align-items: center; gap: 8px;
      height: 38px; padding: 0 16px 0 14px; border-radius: 999px;
      background: rgba(255, 255, 255, .94); color: #111;
      font-size: 13.5px; font-weight: 500;
      transition: transform .25s var(--ease);
    }
    .poster:hover .play { transform: translateY(-2px); }
    .caption { margin-top: 10px; font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .05em; text-transform: uppercase; color: var(--muted); }
  `],
})
export class MediaEmbedComponent {
  @Input({ required: true }) media!: Media;
  src?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  play(): void {
    const m = this.media;
    const url = m.kind === 'vimeo'
      ? `https://player.vimeo.com/video/${m.id}?h=${m.hash}&autoplay=1`
      : `https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1&rel=0`;
    // URLs are built only from the static portfolio data, never from user input.
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
