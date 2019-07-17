import { Component, OnInit } from '@angular/core';
import { DonateService } from './../donateservice';
@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.css']
})
export class DonationlistComponent implements OnInit {
  public donate = [];
  constructor(private _donateService: DonateService) { }

  ngOnInit() {
    this._donateService.getdonation().subscribe(
      (data) => this.donate = data
    );
  }

}
