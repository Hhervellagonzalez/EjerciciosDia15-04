import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2DirectivasComponent } from './ejercicio2-directivas.component';

describe('Ejercicio2DirectivasComponent', () => {
  let component: Ejercicio2DirectivasComponent;
  let fixture: ComponentFixture<Ejercicio2DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2DirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
