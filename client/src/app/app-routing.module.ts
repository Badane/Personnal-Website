import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
	{path:'',canActivate: [AuthGuardService], children:[
		{path: '',component: IndexComponent},
		{path: 'about',component: AboutComponent},
		{path: 'work',component: WorkComponent},
		{path: 'pictures',component: PicturesComponent}
	]},
	{path: 'login',component: LoginComponent},
	{path: '**',redirectTo:''},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
