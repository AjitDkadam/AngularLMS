import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './home/course/course.component';
import { HomeComponent } from './home/home/home.component';
import { ViewAllCourseComponent } from './home/view-all-course/view-all-course.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path :'', component :LoginComponent},
  {path :'userRegistration', component :UserRegistrationComponent},
  {path :'backToHome', component : HomeComponent},
  {
      path : 'home',
      children: [
        {path :'', component : HomeComponent},
        {path : 'addCourse', component : CourseComponent},
        {path : 'viewAllCourse', component : ViewAllCourseComponent},
        
      ]
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
