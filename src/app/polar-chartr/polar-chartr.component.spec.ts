import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarChartrComponent } from './polar-chartr.component';

describe('PolarChartrComponent', () => {
  let component: PolarChartrComponent;
  let fixture: ComponentFixture<PolarChartrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarChartrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarChartrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
