import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductolistacardComponent } from './productolistacard.component';

describe('ProductolistacardComponent', () => {
  let component: ProductolistacardComponent;
  let fixture: ComponentFixture<ProductolistacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductolistacardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductolistacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
