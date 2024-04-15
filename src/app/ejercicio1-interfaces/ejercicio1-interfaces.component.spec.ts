import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1InterfacesComponent } from './ejercicio1-interfaces.component';

describe('Ejercicio1InterfacesComponent', () => {
  let component: Ejercicio1InterfacesComponent;
  let fixture: ComponentFixture<Ejercicio1InterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1InterfacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio1InterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
