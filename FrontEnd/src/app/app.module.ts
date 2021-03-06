import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagePipe } from './pipes/image.pipe';
import { ImageMediumPipe } from './pipes/image-medium.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ImagePipe,
    ImageMediumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
