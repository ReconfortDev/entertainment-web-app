import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandcardComponent } from './treandcard.component';

describe('TreandcardComponent', () => {
  let component: TreandcardComponent;
  let fixture: ComponentFixture<TreandcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreandcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreandcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
