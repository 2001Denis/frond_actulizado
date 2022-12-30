import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocertificadoComponent } from './nuevocertificado.component';

describe('NuevocertificadoComponent', () => {
  let component: NuevocertificadoComponent;
  let fixture: ComponentFixture<NuevocertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevocertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevocertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
