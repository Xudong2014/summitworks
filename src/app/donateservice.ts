import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donate } from 'src/app/donate';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class DonateService {
    private _url: string = 'http://localhost:3000/api/donation';
    constructor(private http: HttpClient) { }
    getdonation(): Observable<Donate[]> {
        return this.http.get<Donate[]>(this._url);

    }
}