import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregapacienteComponent } from './agregapaciente.component';

describe('AgregapacienteComponent', () => {
  let component: AgregapacienteComponent;
  let fixture: ComponentFixture<AgregapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregapacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
