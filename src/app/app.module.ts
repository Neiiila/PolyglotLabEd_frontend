import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { SubjectComponent } from './components/subject/subject.component';
import { AboutComponent } from './components/about/about.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SubjectsDetailsComponent } from './components/subjects-details/subjects-details.component';
import { CourseExperienceComponent } from './components/course-experience/course-experience.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    AboutComponent,
    SubjectsComponent,
    SubjectsDetailsComponent,
    CourseExperienceComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDetailsComponent,
    ProfileUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
