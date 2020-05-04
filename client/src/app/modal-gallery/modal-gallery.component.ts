import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'app-modal-gallery',
	templateUrl: './modal-gallery.component.html',
	styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {
	galleryList:any[];
	galleryIndex:number;
	
	imageUrl:string;
	imageAlt:string;

	constructor(private el: ElementRef) { }

	ngOnInit(): void {
		this.galleryList = [];
		this.galleryIndex = 0;
		this.imageAlt = "";
		this.imageUrl = "";
	}

	close(){
		console.log('cllose');
		let body  = document.getElementsByTagName('body');
		body[0].classList.remove('modal-open');
		
		this.el.nativeElement.classList.remove('mshow');
		this.el.nativeElement.classList.add('mhidden');

		this.imageUrl = "";
		this.imageAlt = "";
	}

	show(galleryList:any[],selectedId:number){
		console.log('show');
		this.galleryList = galleryList;
		this.galleryIndex = this.galleryList.findIndex(el=> el.id == selectedId);

		this.el.nativeElement.classList.add('mshow');
		this.el.nativeElement.classList.remove('mhidden');

		this.imageUrl = this.galleryList[this.galleryIndex].urlFull;
		this.imageAlt = this.galleryList[this.galleryIndex].alt;
	}
	
	showNoScrollable(galleryList:any[],selectedId:number){
		let body  = document.getElementsByTagName('body');
		body[0].classList.add('modal-open');
		
		this.show(galleryList,selectedId);
	}

	next(){
		if(this.galleryIndex < this.galleryList.length - 1){
			this.galleryIndex ++;
			this.imageUrl = this.galleryList[this.galleryIndex].urlFull;
			this.imageAlt = this.galleryList[this.galleryIndex].alt;
		}
	}

	previous(){
		if(this.galleryIndex > 0 ){
			this.galleryIndex --;
			this.imageUrl = this.galleryList[this.galleryIndex].urlFull;
			this.imageAlt = this.galleryList[this.galleryIndex].alt;
		}
	}

}
