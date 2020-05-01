//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PicturesComponent } from './pictures/pictures.component';
import { IndexComponent } from './index/index.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    IndexComponent,
    TopMenuComponent,
    AboutComponent,
    WorkComponent,
    ModalGalleryComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
