import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Game } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games`).pipe(
      catchError(this.handleError)
    );
  }

  getGameDetails(gameId: number): Observable<Game> {
    return this.http.get<any>(`${this.apiUrl}/game?id=${gameId}`).pipe(
      map((game: any) => {
        console.log(game)
        return game
      })
    );
  }

  getGenresAndPlatforms(): Observable<{ genres: string[], platforms: string[] }> {
    return this.getGames().pipe(
      map(games => {
        const genres = games.map(game => game.genre);
        const platforms = games.map(game => game.platform);
        return { genres, platforms };
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }

  filterGames(selectedGenre: string, selectedPlatform: string): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => {
        let filteredGames = games;

        // Aplicar filtro por género
        if (selectedGenre) {
          filteredGames = filteredGames.filter(game => game.genre === selectedGenre);
        }

        // Aplicar filtro por plataforma
        if (selectedPlatform) {
          filteredGames = filteredGames.filter(game => game.platform === selectedPlatform);
        }

        return filteredGames;
      }),
      catchError(error => {
        console.error('Error fetching filtered games:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}
