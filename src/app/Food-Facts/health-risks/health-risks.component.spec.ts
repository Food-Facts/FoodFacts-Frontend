import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRisksComponent } from './health-risks.component';

describe('HealthRisksComponent', () => {
  let component: HealthRisksComponent;
  let fixture: ComponentFixture<HealthRisksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthRisksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
