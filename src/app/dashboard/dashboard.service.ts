import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '@core/Models/customer.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) {}

    getCustomers(filter: string = ''): Observable<Customer[]> {
        return this.http
            .get<Array<Customer>>(`customers`, {
                params: new HttpParams().set('filter', filter)
            })
            .pipe(map(res => res));
    }
}
