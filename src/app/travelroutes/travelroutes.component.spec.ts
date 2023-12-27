import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelroutesComponent } from './travelroutes.component';

describe('TravelroutesComponent', () => {
  let component: TravelroutesComponent;
  let fixture: ComponentFixture<TravelroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelroutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
