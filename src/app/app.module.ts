import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { ChickensEditComponent } from './chickens-edit/chickens-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmsListComponent,
    ChickensListComponent,
    ChickensEditComponent
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
