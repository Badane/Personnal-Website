import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { PicturesDetailsComponent } from './pictures-details/pictures-details.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'Main page' }
  },
  {
    path: 'photos',
    component: PicturesComponent,
    data: { title: 'List of Pictures' }
  },
  {
    path: 'photos/:id',
    component: PicturesDetailsComponent,
    data: { title: 'Pictures Details' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
