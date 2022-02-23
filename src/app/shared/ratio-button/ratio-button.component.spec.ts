import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioButtonComponent } from './ratio-button.component';

describe('RatioButtonComponent', () => {
  let component: RatioButtonComponent;
  let fixture: ComponentFixture<RatioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
