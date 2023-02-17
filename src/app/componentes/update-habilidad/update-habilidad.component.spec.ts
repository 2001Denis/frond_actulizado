import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHabilidadComponent } from './update-habilidad.component';

describe('UpdateHabilidadComponent', () => {
  let component: UpdateHabilidadComponent;
  let fixture: ComponentFixture<UpdateHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
