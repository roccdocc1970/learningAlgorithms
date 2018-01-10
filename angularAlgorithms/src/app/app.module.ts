import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinkedListsComponent } from './linked-lists/linked-lists.component';
import { StacksAndCuesComponent } from './stacks-and-cues/stacks-and-cues.component';
import { TreesAndGraphsComponent } from './trees-and-graphs/trees-and-graphs.component';
import { ArraysAndStringsComponent } from './arrays-and-strings/arrays-and-strings.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkedListsComponent,
    StacksAndCuesComponent,
    TreesAndGraphsComponent,
    ArraysAndStringsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
