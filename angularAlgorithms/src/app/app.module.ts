import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LinkedListsComponent } from './linked-lists/linked-lists.component';
import { StacksAndCuesComponent } from './stacks-and-cues/stacks-and-cues.component';
import { TreesAndGraphsComponent } from './trees-and-graphs/trees-and-graphs.component';
import { ArraysAndStringsComponent } from './arrays-and-strings/arrays-and-strings.component';

const appRoutes: Routes = [
  { path: 'linked-lists', component: LinkedListsComponent },
  { path: 'stacks-and-cues', component: StacksAndCuesComponent },
  { path: 'trees-and-graphs', component: TreesAndGraphsComponent },
  { path: 'arrays-and-strings', component: ArraysAndStringsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkedListsComponent,
    StacksAndCuesComponent,
    TreesAndGraphsComponent,
    ArraysAndStringsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
