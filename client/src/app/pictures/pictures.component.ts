import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { trigger, state, style, transition, animate } from '@angular/animations';

//Services
import { ApiService } from '../api.service';
import { GalleryService } from '../gallery.service';

//Models
import { Picture } from '../models/picture';
import { ModalGalleryComponent } from '../modal-gallery/modal-gallery.component';

@Component({
	selector: 'app-pictures',
	templateUrl: './pictures.component.html',
	styleUrls: ['./pictures.component.scss'],
	animations: [
		trigger('fadeIn', [
			state('visible', style({
				opacity:1
			})),
			state('void',style({
				opacity:0,
				transform : "translateY(200%)"
			})),
			transition('void=>visible', animate('1500ms'))
		])
	]
})
export class PicturesComponent implements OnInit {
	visibleImages:any[] = [];
	loadingHeight:number;
	oldMaxHeight:number = 0;
	visiblePicture:string="visible";
	@ViewChild(ModalGalleryComponent) modal: ModalGalleryComponent ; 

	constructor(private api:ApiService, private gallery:GalleryService) { 
		this.visibleImages = gallery.getFirstImages();
	}

	ngOnInit(): void {
		this.loadingHeight = document.documentElement.offsetHeight*0.10;
	}

	ngAfterViewInit(){
		this.modal.close();
	}

	@HostListener("window:scroll", ["$event"])
	onWindowScroll() {
		//In chrome and some browser scroll is given to body tag
		let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
		let max = document.documentElement.scrollHeight;
		if(pos > (max-this.loadingHeight) && max != this.oldMaxHeight)   {
			this.oldMaxHeight = max;
			
			this.visibleImages = this.visibleImages.concat(this.gallery.getMoreImages(this.visibleImages.length));
		}
	}

	focusOnPicture(id:number){
		this.modal.showNoScrollable(this.visibleImages,id);	
	}

  
/* Needed to call API and handle socket messages */ 
  	// socket = io('http://localhost:4000');
	// pictures:Picture[] = [];
	// isLoadingResults = true;
  	// ngOnInit(): void {
		//this.getPictures();

		// this.socket.on('update-data',function(data:any){
		//   this.getPictures();
		//   console.log('socket message received');
		// }.bind(this));
  	// }

	// getPictures() {
	//   this.api.getPictures().subscribe((res: any) => {
	//     this.pictures = res;
	//     console.log(this.pictures);
	//     this.isLoadingResults = false;
	//   }, err => {
	//     console.log(err);
	//     this.isLoadingResults = false;
	//   });
	// }

}
