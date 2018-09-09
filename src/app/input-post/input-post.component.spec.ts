import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPostComponent } from './input-post.component';

describe('InputPostComponent', () => {
  let component: InputPostComponent;
  let fixture: ComponentFixture<InputPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
