import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaClienteComponent } from './carga-cliente.component';

describe('CargaClienteComponent', () => {
  let component: CargaClienteComponent;
  let fixture: ComponentFixture<CargaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaClienteComponent]
    });
    fixture = TestBed.createComponent(CargaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
