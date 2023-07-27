// src/app/game-list/game-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameApiService } from '../game-api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameApiService.getGames().subscribe(games => {
      this.games = games;
    });
  }
}


