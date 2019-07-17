import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationlistComponent } from './donationlist.component';

describe('DonationlistComponent', () => {
  let component: DonationlistComponent;
  let fixture: ComponentFixture<DonationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
