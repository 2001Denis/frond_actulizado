import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertificadoComponent } from './update-certificado.component';

describe('UpdateCertificadoComponent', () => {
  let component: UpdateCertificadoComponent;
  let fixture: ComponentFixture<UpdateCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
