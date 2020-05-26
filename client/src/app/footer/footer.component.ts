import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faLinkedinIn, faInstagram, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faShareAlt, faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {  Router } from '@angular/router';
import { Location } from "@angular/common";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('socialIllustration', [
      state('visible', style({
        display:'initial',
        opacity:1
      })),
      state('hidden',style({
        display:'none',
        opacity:0
      })),
      transition('hidden=>visible', animate('500ms')),
      transition('visible=>hidden', animate('400ms')),
    ])
  ]
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faInstagram = faInstagram;
  faGithub = faGithubAlt;
  faEnvelope = faEnvelope;
  faShare = faShareAlt;
  faTimes = faTimesCircle;
  faInfo = faInfoCircle;
  route:string;
  pState:string;
  iState:string;
  cState:string;
  @ViewChild('pSocial',{read: ElementRef, static:false}) shareIcon: ElementRef;
  
  constructor(location: Location, private router:Router) { 
    router.events.subscribe(val => {
      this.route = location.path();     
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    if(getComputedStyle(this.shareIcon.nativeElement).display == 'none'){
      this.pState='visible';
      this.iState='visible';
      this.cState='info';
    }
    else{
      this.pState='hidden';
      this.iState='visible';
      this.cState='info';
    }
  }

  onSocialClick(){
		if(this.pState == "visible"){
      this.pState = "hidden";
      this.iState = "visible";
    }
    else{
      this.cState = 'social';
      this.pState = "visible";
      this.iState = "hidden";
    }
  }
  
  animationDone($event) {
    if(this.pState == "hidden"){
      this.cState = 'info';
    }
  }

}
