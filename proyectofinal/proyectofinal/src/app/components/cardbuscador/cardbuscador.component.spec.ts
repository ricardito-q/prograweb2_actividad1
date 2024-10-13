import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbuscadorComponent } from './cardbuscador.component';

describe('CardbuscadorComponent', () => {
  let component: CardbuscadorComponent;
  let fixture: ComponentFixture<CardbuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardbuscadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
