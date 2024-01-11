import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponent } from './genres-page.component';

describe('GenresPageComponent', () => {
  let component: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenresPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
