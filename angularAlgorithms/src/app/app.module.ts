import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArraysAndComponent } from './arrays-and/arrays-and.component';
import { LinkedListsComponent } from './linked-lists/linked-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    ArraysAndComponent,
    LinkedListsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
