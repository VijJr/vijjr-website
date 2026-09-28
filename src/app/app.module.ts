import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';

import { GlyphComponent } from './shared/glyph/glyph.component';
import { WorkCardComponent } from './shared/work-card/work-card.component';
import { TriadMapComponent } from './shared/triad-map/triad-map.component';
import { MediaEmbedComponent } from './shared/media-embed/media-embed.component';
import { HonorsComponent } from './shared/honors/honors.component';

import { HomeComponent } from './pages/home/home.component';
import { DisciplineComponent } from './pages/discipline/discipline.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    GlyphComponent,
    WorkCardComponent,
    TriadMapComponent,
    MediaEmbedComponent,
    HonorsComponent,
    HomeComponent,
    DisciplineComponent,
    WorkDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
