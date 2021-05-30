import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionFromChildToParentComponent } from './component-interaction-from-child-to-parent.component';

describe('ComponentInteractionFromChildToParentComponent', () => {
  let component: ComponentInteractionFromChildToParentComponent;
  let fixture: ComponentFixture<ComponentInteractionFromChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionFromChildToParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionFromChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
