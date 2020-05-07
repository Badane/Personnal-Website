import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

	visibleImages = [];
	bulkSize = 8;  

    getAllImages(){
        return this.visibleImages = IMAGES.slice(0);
	}
	
    getFirstImages(){
        return this.visibleImages = IMAGES.slice(0,this.bulkSize);
	}
	
    getMoreImages(index:number){
        return this.visibleImages = IMAGES.slice(index,index+this.bulkSize);
    }

    getImageFromId(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
	{"id":12,"urlPreview":"../../assets/images/gallery/preview/DSCF0725.jpg","urlFull":"../../assets/images/gallery/full/DSCF0725.jpg","alt":"photo-DSCF0725"},
	{"id":11,"urlPreview":"../../assets/images/gallery/preview/DSCF0873-2.jpg","urlFull":"../../assets/images/gallery/full/DSCF0873-2.jpg","alt":"photo-DSCF0873-2"},
	{"id":10,"urlPreview":"../../assets/images/gallery/preview/DSCF1219-2.jpg","urlFull":"../../assets/images/gallery/full/DSCF1219-2.jpg","alt":"photo-DSCF1219-2"},
	{"id":9,"urlPreview":"../../assets/images/gallery/preview/DSCF1070.jpg","urlFull":"../../assets/images/gallery/full/DSCF1070.jpg","alt":"photo-DSCF1070"},
    
    {"id":8,"urlPreview":"../../assets/images/gallery/preview/DSCF1280.jpg","urlFull":"../../assets/images/gallery/full/DSCF1280.jpg","alt":"photo-DSCF1280"},
    {"id":7,"urlPreview":"../../assets/images/gallery/preview/DSCF1210.jpg","urlFull":"../../assets/images/gallery/full/DSCF1210.jpg","alt":"photo-DSCF1210"},
    {"id":6,"urlPreview":"../../assets/images/gallery/preview/DSCF1109.jpg","urlFull":"../../assets/images/gallery/full/DSCF1109.jpg","alt":"photo-DSCF1109"},
    {"id":5,"urlPreview":"../../assets/images/gallery/preview/DSCF0938.jpg","urlFull":"../../assets/images/gallery/full/DSCF0938.jpg","alt":"photo-DSCF0938"},
    {"id":4,"urlPreview":"../../assets/images/gallery/preview/DSCF0919.jpg","urlFull":"../../assets/images/gallery/full/DSCF0919.jpg","alt":"photo-DSCF0919"},
    {"id":3,"urlPreview":"../../assets/images/gallery/preview/DSCF0816.jpg","urlFull":"../../assets/images/gallery/full/DSCF0816.jpg","alt":"photo-DSCF0816"},
    {"id":2,"urlPreview":"../../assets/images/gallery/preview/DSCF0470.jpg","urlFull":"../../assets/images/gallery/full/DSCF0470.jpg","alt":"photo-DSCF0470"},
    {"id":1,"urlPreview":"../../assets/images/gallery/preview/DSCF0262.jpg","urlFull":"../../assets/images/gallery/full/DSCF0262.jpg","alt":"photo-DSCF0262"},
]
