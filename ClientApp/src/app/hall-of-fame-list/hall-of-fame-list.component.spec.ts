import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfFameListComponent } from './hall-of-fame-list.component';

describe('HallOfFameListComponent', () => {
  let component: HallOfFameListComponent;
  let fixture: ComponentFixture<HallOfFameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallOfFameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallOfFameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
