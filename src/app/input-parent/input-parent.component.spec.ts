import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParentComponent } from './input-parent.component';

describe('InputParentComponent', () => {
  let component: InputParentComponent;
  let fixture: ComponentFixture<InputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
