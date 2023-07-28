// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta línea
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFilterComponent } from './game-filter/game-filter.component';
import { FormsModule } from '@angular/forms';
import { GameDetailsComponent } from '../app/game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFilterComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
