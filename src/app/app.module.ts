import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './slide/slide.component';
import { AboutComponent } from './about/about.component';
import { WhyMentorComponent } from './why-mentor/why-mentor.component';
import { BrandComponent } from './brand/brand.component';
import { PopularCourseComponent } from './popular-course/popular-course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { TrinerpageComponent } from './trinerpage/trinerpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path: 'event',
    component: EventpageComponent
  },
  {
    path:'contact',
    component:ContactpageComponent
  },
  {
    path:'trainer',
    component:TrinerpageComponent
  },
  {
    path:'course',
    component:CoursepageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    AboutComponent,
    WhyMentorComponent,
    BrandComponent,
    PopularCourseComponent,
    TrainerComponent,
    HomeComponent,
    AboutPageComponent,
    EventpageComponent,
    CoursepageComponent,
    TrinerpageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
