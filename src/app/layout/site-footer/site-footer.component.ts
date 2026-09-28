import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
