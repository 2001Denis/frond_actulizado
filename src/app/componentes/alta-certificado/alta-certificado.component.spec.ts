import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCertificadoComponent } from './alta-certificado.component';

describe('AltaCertificadoComponent', () => {
  let component: AltaCertificadoComponent;
  let fixture: ComponentFixture<AltaCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
