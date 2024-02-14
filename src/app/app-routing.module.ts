import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component'; 
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';
import { SubjectsDetailsComponent } from './components/subjects-details/subjects-details.component';
import { CourseExperienceComponent } from './components/course-experience/course-experience.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'subject-details',
    component: SubjectsDetailsComponent
  }
  , { 
      path: 'course-experience', /*subject-details/:id*/  
      component: CourseExperienceComponent 
    }
  , { 
      path: 'login',
      component: LoginComponent 
    }
  , { 
      path: 'register',
      component: RegisterComponent
    }
  ,{
    path: 'profile-details',
    component: ProfileDetailsComponent
  }
  ,{
    path: 'profile-update',
    component: ProfileUpdateComponent
  
  }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
