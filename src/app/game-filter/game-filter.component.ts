import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';
import { Game } from '../models/game.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent implements OnInit {
  genres: string[] = [];
  platforms: string[] = [];
  selectedGenre: string = '';
  selectedPlatform: string = '';
  filteredGames: Game[] = []; // Variable para almacenar los juegos filtrados

  constructor(
    private gameApiService: GameApiService, 
    private router: Router ) { }

  ngOnInit(): void {
    this.getGenresAndPlatforms();
    this.applyFilters(); // Aplicar filtros al cargar el componente
  }

  getGenresAndPlatforms(): void {
    this.gameApiService.getGenresAndPlatforms().subscribe(
      data => {
        this.genres = Array.from(new Set(data.genres));
        this.platforms = Array.from(new Set(data.platforms));
      },
      error => {
        console.error('Error fetching genres and platforms:', error);
      }
    );
  }

  applyFilters(): void {
    this.gameApiService.filterGames(this.selectedGenre, this.selectedPlatform).subscribe(
      filteredGames => {
        this.filteredGames = filteredGames;
      },
      error => {
        console.error('Error fetching filtered games:', error);
      }
    );
  }

  navigateToGameDetails(gameId: number): void {
    this.router.navigate(['/game-details', gameId]);
  }
}

