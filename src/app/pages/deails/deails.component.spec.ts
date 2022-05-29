import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeailsComponent } from './deails.component';

describe('DeailsComponent', () => {
  let component: DeailsComponent;
  let fixture: ComponentFixture<DeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
