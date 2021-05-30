import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionFromParentToChildComponent } from './component-interaction-from-parent-to-child.component';

describe('ComponentInteractionFromParentToChildComponent', () => {
  let component: ComponentInteractionFromParentToChildComponent;
  let fixture: ComponentFixture<ComponentInteractionFromParentToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionFromParentToChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionFromParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
