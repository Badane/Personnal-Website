import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeDev', [
      state('visible', style({
        opacity:1
      })),
      state('hidden', style({
        opacity:0
      })),
      state('void',style({
        opacity:0
      })),
      transition('void=>visible', animate('1000ms')),
      transition('hidden=>visible', animate('800ms')),
      transition('visible=>hidden', animate('500ms')),
      transition('visible=>void', animate('500ms')),
    ]),
    trigger('fadePhoto', [
      state('visible', style({
        opacity:1
      })),
      state('hidden',style({
        opacity:0
      })),
      state('void',style({
        opacity:0
      })),
      transition('void=>visible', animate('1000ms')),
      transition('hidden=>visible', animate('800ms')),
      transition('visible=>void', animate('500ms')),
      transition('visible=>hidden', animate('500ms')),
    ])
  ]
})
export class AboutComponent implements OnInit {
  background:any;
  toggleBody:any;
  toggleBtn:any;
  skewX:number;
  contentYPosition:number;
  @ViewChild('content',{read: ElementRef, static:false}) elementView: ElementRef;
  sizedContentHeight: number;
  displayDevDescription:boolean;
  displayDevIllustration:boolean;
  displayPhotoDescription:boolean;
  displayPhotoIllustration:boolean;
  currentStateDev:string;
  currentStatePhoto:string;

  	constructor(private cd: ChangeDetectorRef) { }
  
  	ngOnInit(): void {
		this.skewX = 45;
		
		this.displayDevDescription = true;
		this.displayDevIllustration = true;
		this.currentStateDev = "visible";
		this.displayPhotoDescription = false;
		this.displayPhotoIllustration = false;
		this.currentStatePhoto = "hidden";

		this.background = document.querySelector('.background');
		this.toggleBody = document.querySelector('.toggle-body');
		this.toggleBtn = document.querySelector('.toggle-btn');

		this.contentYPosition = document.querySelector('.content').getBoundingClientRect().top;
		this.sizedContentHeight = 0;
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
		this.sizedContentHeight = viewHeight-this.contentYPosition;

		var viewWidth = this.elementView.nativeElement.offsetWidth;
		this.skewX = 90 - (Math.atan(this.sizedContentHeight/(viewWidth*0.5))*(180/Math.PI));
	}

	//onClick to switch content
	onToggleClick(){
		if(this.displayDevDescription){
			this.displayDevDescription = !this.displayDevDescription;
			this.currentStateDev = 'hidden';
		}
		else{
			this.displayPhotoDescription = !this.displayPhotoDescription;
			this.currentStatePhoto = 'hidden';
		}

		this.background.classList.toggle('background--on');
		this.toggleBody.classList.toggle('toggle-body--on');
		this.toggleBtn.classList.toggle('toggle-btn--on');
		this.toggleBtn.classList.toggle('toggle-btn--scale');
  	}
	
	//Animation Event listner
	onDevAnimationEvent(event: AnimationEvent) {
		if(event.toState === 'void'){
			this.displayPhotoDescription = !this.displayPhotoDescription;
			this.displayPhotoIllustration = !this.displayPhotoIllustration;
			this.currentStatePhoto = 'visible';
			
			this.displayDevIllustration = false;
		}
	}
	
	onPhotoAnimationEvent(event: AnimationEvent) {
		if(event.toState === 'void'){
			this.displayDevDescription = !this.displayDevDescription;
			this.displayDevIllustration = !this.displayDevIllustration;
			this.currentStateDev = 'visible';
			
			this.displayPhotoIllustration = false;
		}
	}

}
