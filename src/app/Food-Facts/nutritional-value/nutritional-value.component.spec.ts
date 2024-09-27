import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalValueComponent } from './nutritional-value.component';

describe('NutritionalValueComponent', () => {
  let component: NutritionalValueComponent;
  let fixture: ComponentFixture<NutritionalValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionalValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionalValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
