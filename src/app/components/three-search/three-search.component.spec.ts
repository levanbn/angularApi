import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSearchComponent } from './three-search.component';

describe('ThreeSearchComponent', () => {
  let component: ThreeSearchComponent;
  let fixture: ComponentFixture<ThreeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
