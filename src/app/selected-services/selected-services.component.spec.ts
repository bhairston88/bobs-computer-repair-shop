import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedServicesComponent } from './selected-services.component';

describe('SelectedServicesComponent', () => {
  let component: SelectedServicesComponent;
  let fixture: ComponentFixture<SelectedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
