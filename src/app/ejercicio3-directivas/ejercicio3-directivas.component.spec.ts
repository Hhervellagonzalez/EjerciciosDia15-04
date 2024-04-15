import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3DirectivasComponent } from './ejercicio3-directivas.component';

describe('Ejercicio3DirectivasComponent', () => {
  let component: Ejercicio3DirectivasComponent;
  let fixture: ComponentFixture<Ejercicio3DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio3DirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio3DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
