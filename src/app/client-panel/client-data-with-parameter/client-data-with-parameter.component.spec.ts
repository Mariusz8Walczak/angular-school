import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataWithParameterComponent } from './client-data-with-parameter.component';

describe('ClientDataWithParameterComponent', () => {
  let component: ClientDataWithParameterComponent;
  let fixture: ComponentFixture<ClientDataWithParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDataWithParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDataWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
