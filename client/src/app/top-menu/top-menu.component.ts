import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
	isLogged:boolean;
	header:any;

	constructor(private authService: AuthenticationService) { }

	ngOnInit(){}
	
	ngAfterViewInit(): void{
		this.header = document.querySelector('.header');
	}

	ngDoCheck(){
		if(environment.doAuth)
			this.isLogged = this.authService.isLoggedIn();
		else
			this.isLogged = true;
	}

	activeMenu(){
		this.header.classList.toggle('menu-opened');
	}

	close(){
		this.header.classList.remove('menu-opened');
	}
	

}
