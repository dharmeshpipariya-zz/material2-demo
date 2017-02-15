import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { Md2Module } from 'md2';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
