import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntoWordsPipe } from './pipes/into-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntoWordsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
