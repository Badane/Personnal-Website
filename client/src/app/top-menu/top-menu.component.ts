import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
	contentHeight: string;

	constructor(private authService: AuthenticationService, private cd: ChangeDetectorRef) { }

	ngOnInit(){	}
	
	ngAfterViewInit(): void{
		this.header = document.querySelector('.header');
		var headerYPosition = this.header.getBoundingClientRect().bottom;
		this.contentHeight = "calc(100% - "+headerYPosition+"px)";
		this.cd.detectChanges();
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
