import { Component, OnInit } from '@angular/core';
import { AdminService } from './../adminservice';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {
  public admin = [];
  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getdetail().subscribe(
      (data) => this.admin = data
    );
  }

}
