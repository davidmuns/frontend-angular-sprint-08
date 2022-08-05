import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipComponent } from './starship.component';

describe('StarshipsComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarshipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
