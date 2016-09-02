import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { Md2Module }  from 'md2/all';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Md2Module
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
