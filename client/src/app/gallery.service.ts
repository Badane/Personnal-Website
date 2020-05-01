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
    {"id":1,"url":"../../assets/images/gallery/DSCF0262.jpg","alt":"photo-DSCF0262"},
    {"id":2,"url":"../../assets/images/gallery/DSCF0470.jpg","alt":"photo-DSCF0470"},
    {"id":3,"url":"../../assets/images/gallery/DSCF0222.jpg","alt":"photo-DSCF0222"},
    {"id":4,"url":"../../assets/images/gallery/DSCF0919.jpg","alt":"photo-DSCF0919"},
    {"id":5,"url":"../../assets/images/gallery/DSCF0938.jpg","alt":"photo-DSCF0938"},
    {"id":6,"url":"../../assets/images/gallery/DSCF1109.jpg","alt":"photo-DSCF1109"},
    {"id":7,"url":"../../assets/images/gallery/DSCF1210.jpg","alt":"photo-DSCF1210"},
	{"id":8,"url":"../../assets/images/gallery/DSCF1280.jpg","alt":"photo-DSCF1280"},
	
	{"id":9,"url":"../../assets/images/gallery/DSCF0262.jpg","alt":"photo-DSCF0262"},
    {"id":10,"url":"../../assets/images/gallery/DSCF0470.jpg","alt":"photo-DSCF0470"},
    {"id":11,"url":"../../assets/images/gallery/DSCF0816.jpg","alt":"photo-DSCF0816"},
    {"id":12,"url":"../../assets/images/gallery/DSCF0919.jpg","alt":"photo-DSCF0919"},
    {"id":13,"url":"../../assets/images/gallery/DSCF0938.jpg","alt":"photo-DSCF0938"},
    {"id":14,"url":"../../assets/images/gallery/DSCF1109.jpg","alt":"photo-DSCF1109"},
    {"id":15,"url":"../../assets/images/gallery/DSCF1210.jpg","alt":"photo-DSCF1210"},
	{"id":16,"url":"../../assets/images/gallery/DSCF1280.jpg","alt":"photo-DSCF1280"},
	{"id":17,"url":"../../assets/images/gallery/DSCF0262.jpg","alt":"photo-DSCF0262"},
    {"id":18,"url":"../../assets/images/gallery/DSCF0470.jpg","alt":"photo-DSCF0470"},
    {"id":19,"url":"../../assets/images/gallery/DSCF0816.jpg","alt":"photo-DSCF0816"},
    {"id":20,"url":"../../assets/images/gallery/DSCF0919.jpg","alt":"photo-DSCF0919"},
    {"id":21,"url":"../../assets/images/gallery/DSCF0938.jpg","alt":"photo-DSCF0938"},
    {"id":22,"url":"../../assets/images/gallery/DSCF1109.jpg","alt":"photo-DSCF1109"},
    {"id":23,"url":"../../assets/images/gallery/DSCF1210.jpg","alt":"photo-DSCF1210"},
    {"id":24,"url":"../../assets/images/gallery/DSCF1280.jpg","alt":"photo-DSCF1280"}
]
