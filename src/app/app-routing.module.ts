import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { StudyComponent } from './study/study.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
    {path: '', redirectTo: '/aboutMe', pathMatch: 'full'},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'study', component: StudyComponent},
    {path: 'work', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
