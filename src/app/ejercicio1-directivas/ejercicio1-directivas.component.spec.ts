import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1DirectivasComponent } from './ejercicio1-directivas.component';

describe('Ejercicio1DirectivasComponent', () => {
  let component: Ejercicio1DirectivasComponent;
  let fixture: ComponentFixture<Ejercicio1DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1DirectivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio1DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
