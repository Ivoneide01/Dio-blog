import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCardComponent } from './two-card.component';

describe('TwoCardComponent', () => {
  let component: TwoCardComponent;
  let fixture: ComponentFixture<TwoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoCardComponent]
    });
    fixture = TestBed.createComponent(TwoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
