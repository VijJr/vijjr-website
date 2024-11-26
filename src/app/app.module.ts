import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TitleBannerComponent } from './main-page/intro/title-banner/title-banner.component';

import { TimelineComponent } from './main-page/timeline/timeline.component';
import { IntroComponent } from './main-page/intro/intro.component';
import { AwardsComponent } from './main-page/awards/awards.component';
import { HobbiesComponent } from './main-page/hobbies/hobbies.component';
import { FutureComponent } from './main-page/future/future.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitleBannerComponent,
    TimelineComponent,
    IntroComponent,
    AwardsComponent,
    HobbiesComponent,
    FutureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
