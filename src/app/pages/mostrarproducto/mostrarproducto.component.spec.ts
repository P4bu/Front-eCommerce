import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarproductoComponent } from './mostrarproducto.component';

describe('MostrarproductoComponent', () => {
  let component: MostrarproductoComponent;
  let fixture: ComponentFixture<MostrarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
