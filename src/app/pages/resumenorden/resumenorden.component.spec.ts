import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenordenComponent } from './resumenorden.component';

describe('ResumenordenComponent', () => {
  let component: ResumenordenComponent;
  let fixture: ComponentFixture<ResumenordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenordenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
