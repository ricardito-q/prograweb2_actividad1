import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproductosComponent } from './cardproductos.component';

describe('CardproductosComponent', () => {
  let component: CardproductosComponent;
  let fixture: ComponentFixture<CardproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
