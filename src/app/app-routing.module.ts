// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFilterComponent } from './game-filter/game-filter.component';
import { GameDetailsComponent } from './game-details/game-details.component';
const routes: Routes = [
  { path: 'filter', component: GameFilterComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'game-details/:id', component: GameDetailsComponent },
  { path: '', redirectTo: 'filter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



