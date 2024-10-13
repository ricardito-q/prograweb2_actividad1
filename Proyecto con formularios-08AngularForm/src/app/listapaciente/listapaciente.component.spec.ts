import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapacienteComponent } from './listapaciente.component';

describe('ListapacienteComponent', () => {
  let component: ListapacienteComponent;
  let fixture: ComponentFixture<ListapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListapacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
