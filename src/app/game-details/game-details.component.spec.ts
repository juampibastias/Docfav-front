import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GameApiService } from '../game-api.service';
import { Game } from '../models/game.model';
import { GameDetailsComponent } from './game-details.component';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;
  let mockGameApiService: jasmine.SpyObj<GameApiService>;

  const dummyGame: Game = {
    id: 1,
    developer: 'Sample Developer',
    description: 'Sample Game Description',
    freetogame_profile_url: 'https://www.example.com',
    game_url: 'https://www.example.com/game',
    minimum_system_requirements: 'Sample System Requirements',
    release_date: new Date(),
    status: 'sample',
    title: 'Sample Game',
    thumbnail: 'https://www.example.com/thumbnail',
    short_description: 'Sample Short Description',
    genre: 'Action',
    platform: 'PC',
  };

  beforeEach(() => {
    mockGameApiService = jasmine.createSpyObj<GameApiService>('GameApiService', ['getGameDetails']);
    TestBed.configureTestingModule({
      declarations: [GameDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
        { provide: GameApiService, useValue: mockGameApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch game details on initialization', () => {
    mockGameApiService.getGameDetails.and.returnValue(of(dummyGame));

    component.ngOnInit();

    expect(mockGameApiService.getGameDetails).toHaveBeenCalled();
    expect(component.game).toEqual(dummyGame);
  });

  // You can add more tests for error scenarios, like what happens if the API call fails, etc.
});
