import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GameApiService } from '../game-api.service';
import { Game } from '../models/game.model';
import { GameFilterComponent } from './game-filter.component';

describe('GameFilterComponent', () => {
  let component: GameFilterComponent;
  let fixture: ComponentFixture<GameFilterComponent>;
  let mockGameApiService: jasmine.SpyObj<GameApiService>;

  const dummyGames: Game[] = [
    // Tu lista de juegos dummy aquí...
  ];

  beforeEach(waitForAsync(() => {
    mockGameApiService = jasmine.createSpyObj<GameApiService>('GameApiService', ['getGenresAndPlatforms', 'filterGames']);
    TestBed.configureTestingModule({
      declarations: [GameFilterComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: GameApiService, useValue: mockGameApiService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch genres and platforms on initialization', () => {
    const dummyGenresAndPlatforms = { genres: ['Action', 'Adventure'], platforms: ['PC', 'Console'] };
    mockGameApiService.getGenresAndPlatforms.and.returnValue(of(dummyGenresAndPlatforms));

    component.ngOnInit();

    expect(mockGameApiService.getGenresAndPlatforms).toHaveBeenCalled();
    expect(component.genres).toEqual(dummyGenresAndPlatforms.genres);
    expect(component.platforms).toEqual(dummyGenresAndPlatforms.platforms);
  });

  it('should apply filters and get filtered games', () => {
    const dummyFilteredGames: Game[] = [dummyGames[0]];
    component.selectedGenre = 'Action';
    component.selectedPlatform = 'PC';
    mockGameApiService.filterGames.and.returnValue(of(dummyFilteredGames));

    component.applyFilters();

    expect(mockGameApiService.filterGames).toHaveBeenCalledWith('Action', 'PC');
    expect(component.filteredGames).toEqual(dummyFilteredGames);
  });
});
