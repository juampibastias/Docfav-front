// src/app/game-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
      map((response: any) => response.map((game: any) => ({
        id: game.id,
        title: game.title,
        thumbnail: game.thumbnail,
        short_description: game.short_description,
        genre: game.genre,
        platform: game.platform
      }))),
      catchError(this.handleError)
    );
  }

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/genres/`).pipe(
      catchError(this.handleError)
    );
  }

  getPlatforms(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/platforms/`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}

