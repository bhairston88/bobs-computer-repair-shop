import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRepairComponent } from './start-repair.component';

describe('StartRepairComponent', () => {
  let component: StartRepairComponent;
  let fixture: ComponentFixture<StartRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
