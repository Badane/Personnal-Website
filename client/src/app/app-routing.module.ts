import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { PicturesDetailsComponent } from './pictures-details/pictures-details.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'Main page' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Me' }
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { title: 'My work' }
  },
  {
    path: 'pictures',
    component: PicturesComponent,
    data: { title: 'List of Pictures' }
  }
  // {
  //   path: 'photos/:id',
  //   component: PicturesDetailsComponent,
  //   data: { title: 'Pictures Details' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
