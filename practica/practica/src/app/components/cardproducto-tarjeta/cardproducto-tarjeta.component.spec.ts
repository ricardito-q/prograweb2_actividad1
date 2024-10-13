import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproductoTarjetaComponent } from './cardproducto-tarjeta.component';

describe('CardproductoTarjetaComponent', () => {
  let component: CardproductoTarjetaComponent;
  let fixture: ComponentFixture<CardproductoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardproductoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardproductoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
