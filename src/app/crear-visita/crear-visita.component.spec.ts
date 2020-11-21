import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVisitaComponent } from './crear-visita.component';

describe('CrearVisitaComponent', () => {
  let component: CrearVisitaComponent;
  let fixture: ComponentFixture<CrearVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
