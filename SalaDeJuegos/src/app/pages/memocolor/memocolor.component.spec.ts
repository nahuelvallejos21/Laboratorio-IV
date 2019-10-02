import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemocolorComponent } from './memocolor.component';

describe('MemocolorComponent', () => {
  let component: MemocolorComponent;
  let fixture: ComponentFixture<MemocolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemocolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemocolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
