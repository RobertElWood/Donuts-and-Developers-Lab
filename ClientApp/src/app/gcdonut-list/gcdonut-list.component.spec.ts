import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCDonutListComponent } from './gcdonut-list.component';

describe('GCDonutListComponent', () => {
  let component: GCDonutListComponent;
  let fixture: ComponentFixture<GCDonutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCDonutListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCDonutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
