import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faInstagram, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  Router } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faInstagram = faInstagram;
  faGithub = faGithubAlt;
  faEnvelope = faEnvelope;
  route:string;
  
  constructor(location: Location, private router:Router) { 
    router.events.subscribe(val => {
      this.route = location.path();     
    });
  }

  ngOnInit(): void {
  }

}
