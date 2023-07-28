import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Game } from '../models/game.model';
import { GameFilterComponent } from './game-filter.component';
import { GameApiService } from '../game-api.service';

describe('GameFilterComponent', () => {
  let component: GameFilterComponent;
  let fixture: ComponentFixture<GameFilterComponent>;
  let gameApiService: GameApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameFilterComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [GameApiService]
    }).compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFilterComponent);
    component = fixture.componentInstance;
    gameApiService = TestBed.inject(GameApiService); // Obtener la instancia del servicio inyectado en el componente.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set filteredGames correctly when filters are applied', () => {
    // Datos de prueba para simular la respuesta del servicio de filtrado.
    const filteredGamesMock: Game[] = [
      // Aquí puedes definir algunos juegos de prueba para la respuesta simulada.
      {
        id: 1,
        developer: 'Developer 1',
        description: 'Description 1',
        freetogame_profile_url: 'url1',
        game_url: 'game_url1',
        minimum_system_requirements: 'Minimum Requirements 1',
        release_date: new Date(),
        status: 'Status 1',
        title: 'Game 1',
        thumbnail: 'thumbnail1',
        short_description: 'Short Description 1',
        genre: 'Genre 1',
        platform: 'Platform 1',
      },
      {
        id: 2,
        developer: 'Developer 2',
        description: 'Description 2',
        freetogame_profile_url: 'url2',
        game_url: 'game_url2',
        minimum_system_requirements: 'Minimum Requirements 2',
        release_date: new Date(),
        status: 'Status 2',
        title: 'Game 2',
        thumbnail: 'thumbnail2',
        short_description: 'Short Description 2',
        genre: 'Genre 2',
        platform: 'Platform 2',
      },
    ];

    // Espiar el método del servicio para devolver datos simulados.
    spyOn(gameApiService, 'filterGames').and.returnValue(of(filteredGamesMock));

    // Establecer los filtros seleccionados (podrías cambiar los valores aquí para diferentes pruebas).
    component.selectedGenre = 'Genre 1';
    component.selectedPlatform = 'Platform 1';

    // Llamar al método de filtro.
    component.applyFilters();

    // Comprobar que filteredGames se haya establecido correctamente.
    expect(component.filteredGames).toEqual(filteredGamesMock);
  });
});
