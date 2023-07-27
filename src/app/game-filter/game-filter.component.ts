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
    this.gameApiService.getGenresAndPlatforms().subscribe(
      data => {
        // Eliminar duplicados usando conjuntos (Set) y convertirlos nuevamente a matrices (Array)
        this.genres = Array.from(new Set(data.genres));
        this.platforms = Array.from(new Set(data.platforms));
      },
      error => {
        console.error('Error fetching genres and platforms:', error);
      }
    );
  }
}
