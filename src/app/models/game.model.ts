// src/app/models/game.model.ts

export interface Game {
  id: number;
  developer: string;
  description: string;
  freetogame_profile_url: string;
  game_url: string;
  minimum_system_requirements: string;
  release_date: Date;
  status: string;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  // Aquí puedo agregar más propiedades según la documentación de la API
}
