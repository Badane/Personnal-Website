import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { ApiService } from '../api.service';

import { Picture } from '../models/picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  socket = io('http://localhost:4000');
  pictures:Picture[] = [];
  isLoadingResults = true;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getPictures();

    this.socket.on('update-data',function(data:any){
      this.getPictures();
      console.log('socket message received');
    }.bind(this));
  }

  getPictures() {
    this.api.getPictures().subscribe((res: any) => {
      this.pictures = res;
      console.log(this.pictures);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
