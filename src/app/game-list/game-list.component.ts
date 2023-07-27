import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = []; // Utiliza la lista completa de juegos obtenida desde el servicio

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameApiService.getGames().subscribe(
      games => {
        this.games = games;
      },
      error => {
        console.error('Error fetching games:', error);
      }
    );
  }
}
