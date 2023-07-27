// src/app/game-filter/game-filter.component.ts

import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent implements OnInit {
  genres: string[] = [];
  platforms: string[] = [];

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
    this.getGenresAndPlatforms();
  }

  getGenresAndPlatforms(): void {
    this.gameApiService.getGenres().subscribe(
      genres => {
        this.genres = genres;
      },
      error => {
        console.error('Error fetching genres:', error);
      }
    );

    this.gameApiService.getPlatforms().subscribe(
      platforms => {
        this.platforms = platforms;
      },
      error => {
        console.error('Error fetching platforms:', error);
      }
    );
  }
}



