import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIllustration', [
      state('visible', style({
        opacity:0.5
      })),
      state('hidden',style({
        opacity:0
      })),
      transition('hidden=>visible', animate('800ms')),
      transition('visible=>hidden', animate('800ms')),
    ])
  ]
})
export class AboutComponent implements OnInit {
  background:any;
  skewX:number;
  skewY:number;
  skewDiv:string;
  skewImg:string;
  @ViewChild('content',{read: ElementRef, static:false}) elementView: ElementRef;
  stateDev:string;
  statePhoto:string;

  	constructor(private cd: ChangeDetectorRef) { }
  
  	ngOnInit(): void {
		this.skewX = 45;
		this.skewY = 10;
		this.stateDev = "visible";
		this.statePhoto = "hidden";

		this.background = document.querySelector('.background');
	  }

	//Watch window size to redefine angle of picture
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
		
		this.skewX = 90 - (Math.atan(viewHeight/(viewWidth*0.2))*(180/Math.PI));
		this.skewY = Math.atan(50/(viewWidth))*(180/Math.PI);

		if (window.getComputedStyle(this.background).getPropertyValue("position") !== "relative"){
			//Desktop display
			this.skewDiv = "skewX(-"+this.skewX+"deg)";
			this.skewImg = "skewX("+this.skewX+"deg)";
		}
		else{
			//Mobile display
			this.skewDiv = "skewY("+this.skewY+"deg)";
			this.skewImg = "skewY(-"+this.skewY+"deg)";
		}
	}

	overPhoto(){
		this.stateDev = "hidden";
		this.statePhoto = "visible";
	}
	notOverPhoto(){
		this.stateDev = "visible";
		this.statePhoto = "hidden";
	}

}
