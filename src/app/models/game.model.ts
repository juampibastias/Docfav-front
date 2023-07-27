// src/app/models/game.model.ts

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  // Aquí puedo agregar más propiedades según la documentación de la API
}
