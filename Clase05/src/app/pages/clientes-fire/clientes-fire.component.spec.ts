import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFireComponent } from './clientes-fire.component';

describe('ClientesFireComponent', () => {
  let component: ClientesFireComponent;
  let fixture: ComponentFixture<ClientesFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
