import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCDonutDetailComponent } from './gcdonut-detail.component';

describe('GCDonutDetailComponent', () => {
  let component: GCDonutDetailComponent;
  let fixture: ComponentFixture<GCDonutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCDonutDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCDonutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
