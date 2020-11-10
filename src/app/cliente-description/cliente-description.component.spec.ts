import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDescriptionComponent } from './cliente-description.component';

describe('ClienteDescriptionComponent', () => {
  let component: ClienteDescriptionComponent;
  let fixture: ComponentFixture<ClienteDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
