import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksAndCuesComponent } from './stacks-and-cues.component';

describe('StacksAndCuesComponent', () => {
  let component: StacksAndCuesComponent;
  let fixture: ComponentFixture<StacksAndCuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksAndCuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksAndCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
