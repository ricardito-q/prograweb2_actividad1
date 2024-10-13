import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductolistaComponent } from './productolista.component';

describe('ProductolistaComponent', () => {
  let component: ProductolistaComponent;
  let fixture: ComponentFixture<ProductolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductolistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
