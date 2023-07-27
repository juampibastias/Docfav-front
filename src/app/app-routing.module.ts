// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  // Puedes agregar rutas adicionales aquí para mostrar la información completa de un juego
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

