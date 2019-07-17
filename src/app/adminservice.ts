import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/admin';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class AdminService {
    private _url: string = 'http://localhost:3000/api/user';
    constructor(private http: HttpClient) { }
    getdetail(): Observable<Admin[]> {
        return this.http.get<Admin[]>(this._url);

    }
}