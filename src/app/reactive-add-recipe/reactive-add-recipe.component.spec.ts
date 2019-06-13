import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddRecipeComponent } from './reactive-add-recipe.component';

describe('ReactiveAddRecipeComponent', () => {
  let component: ReactiveAddRecipeComponent;
  let fixture: ComponentFixture<ReactiveAddRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveAddRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
