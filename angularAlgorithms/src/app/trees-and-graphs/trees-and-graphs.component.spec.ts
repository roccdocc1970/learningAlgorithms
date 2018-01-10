import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesAndGraphsComponent } from './trees-and-graphs.component';

describe('TreesAndGraphsComponent', () => {
  let component: TreesAndGraphsComponent;
  let fixture: ComponentFixture<TreesAndGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesAndGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesAndGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
