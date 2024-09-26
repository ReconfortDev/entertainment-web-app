import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendskeletonComponent } from './trendskeleton.component';

describe('TrendskeletonComponent', () => {
  let component: TrendskeletonComponent;
  let fixture: ComponentFixture<TrendskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendskeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
