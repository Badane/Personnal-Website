import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private auth: AuthenticationService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if(environment.doAuth){
			if (!this.auth.isLoggedIn()) {
				this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
				return false;
			}
		}
		return true;
	}
}