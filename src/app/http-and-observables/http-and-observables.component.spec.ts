import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAndObservablesComponent } from './http-and-observables.component';

describe('HttpAndObservablesComponent', () => {
  let component: HttpAndObservablesComponent;
  let fixture: ComponentFixture<HttpAndObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpAndObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAndObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
