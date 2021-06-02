import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndHttpComponent } from './services-and-http.component';

describe('ServicesAndHttpComponent', () => {
  let component: ServicesAndHttpComponent;
  let fixture: ComponentFixture<ServicesAndHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAndHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAndHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
