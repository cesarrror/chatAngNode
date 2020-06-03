import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMensajeComponent } from './formulario-mensaje.component';

describe('FormularioMensajeComponent', () => {
  let component: FormularioMensajeComponent;
  let fixture: ComponentFixture<FormularioMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
