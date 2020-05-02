import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	credentials: TokenPayload = {
		email: 'dann.bonderff@gmail.com',
		password: ''
	};
	returnUrl: string;


	constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute,) { }

	ngOnInit(): void {
		// get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
	}

	login() {
		this.auth.login(this.credentials).subscribe(() => {
			this.router.navigate([this.returnUrl]);
		}, (err) => {
			console.error(err);
		}); 
	}
}
