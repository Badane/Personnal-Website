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
	skewX:number;
	skewY:number;
	skewDiv:string;
	skewImg:string;
	@ViewChild('content',{read: ElementRef, static:false}) elementView: ElementRef;
	@ViewChild('pSwitch',{read: ElementRef, static:false}) pSwitchIllustration: ElementRef;
	stateDev:string;
	statePhoto:string;

  	constructor(private cd: ChangeDetectorRef) { }
  
  	ngOnInit(): void {
		this.skewX = 45;
		this.skewY = 10;
		this.stateDev = "visible";
		this.statePhoto = "hidden";
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

		if ( viewWidth <= 734 || viewWidth < viewHeight){
			//Mobile display
			this.skewDiv = "skewY("+this.skewY+"deg)";
			this.skewImg = "skewY(-"+this.skewY+"deg)";
			this.scrollSwitchIllustration();
		}
		else{
			//Desktop display
			this.skewDiv = "skewX(-"+this.skewX+"deg)";
			this.skewImg = "skewX("+this.skewX+"deg)";
		}
	}

	@HostListener("window:scroll", ["$event"])
		onWindowScroll() {
			this.scrollSwitchIllustration();
		}

	overPhoto(){
		this.stateDev = "hidden";
		this.statePhoto = "visible";
	}
	notOverPhoto(){
		this.stateDev = "visible";
		this.statePhoto = "hidden";
	}
	scrollSwitchIllustration(){
		if(this.pSwitchIllustration.nativeElement.getBoundingClientRect().y <= 0){
			this.overPhoto();
		}
		else{
			this.notOverPhoto();
		}
	}

}
