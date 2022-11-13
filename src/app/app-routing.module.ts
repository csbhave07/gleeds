import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectInformationComponent } from './project-information/project-information.component';

const routes: Routes = [
  {
    path:'project-information',
    component: ProjectInformationComponent,
  },
  { path: '', redirectTo: 'project-information', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
