import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	@ViewChild('pageOption',{read: ElementRef, static:false}) elementView: ElementRef;
	skewX:number;

	constructor(private cd: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.skewX = 35;
	}

	ngAfterViewInit(): void{
		this.defineAngleDivision();		
		this.cd.detectChanges();
	}
	
	@HostListener('window:resize',['$event'])
	onResize(event:any){
		this.defineAngleDivision();
	}

	defineAngleDivision(){
		var viewHeight = this.elementView.nativeElement.offsetHeight;
		var viewWidth = this.elementView.nativeElement.offsetWidth;
		var angle = (Math.atan(viewWidth*0.25/viewHeight))*(180/Math.PI);
		this.skewX = angle ;
	}

}
