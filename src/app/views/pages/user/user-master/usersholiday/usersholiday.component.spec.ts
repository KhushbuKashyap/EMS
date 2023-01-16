import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersholidayComponent } from './usersholiday.component';

describe('UsersholidayComponent', () => {
  let component: UsersholidayComponent;
  let fixture: ComponentFixture<UsersholidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersholidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
