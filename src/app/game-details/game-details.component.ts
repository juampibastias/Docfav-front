import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameApiService } from '../game-api.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameApiService: GameApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gameId = Number(params.get('id'));
      this.gameApiService.getGameDetails(gameId).subscribe(
        game => {
          this.game = game;
        },
        error => {
          console.error('Error fetching game details:', error);
        }
      );
    });
  }
}
