import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasAnComponent } from './reglas-an.component';

describe('ReglasAnComponent', () => {
  let component: ReglasAnComponent;
  let fixture: ComponentFixture<ReglasAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglasAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglasAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
