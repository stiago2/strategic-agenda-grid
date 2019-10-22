import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Customer } from '@core/Models/customer.model';

const customers = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const { url, method, params } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(1000))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('customers') && method === 'GET':
                    return getCustomers(params.get('filter'));
                default:
                    return next.handle(request);
            }
        }

        function getCustomers(filterValue: string) {
            let filterCustomers = customers;
            if (filterValue) {
                filterValue = filterValue.trim();
                filterCustomers = customers.filter(
                    (customer: Customer) =>
                        customer.name.includes(filterValue) ||
                        customer.email.includes(filterValue)
                );
            }
            return ok(filterCustomers);
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }
    }
}

function createNewUser(id: number): Customer {
    const NAMES: string[] = [
        'Maia',
        'Asher',
        'Olivia',
        'Atticus',
        'Amelia',
        'Jack',
        'Charlotte',
        'Theodore',
        'Isla',
        'Oliver',
        'Isabella',
        'Jasper',
        'Cora',
        'Levi',
        'Violet',
        'Arthur',
        'Mia',
        'Thomas',
        'Elizabeth'
    ];
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

    const email = `${NAMES[
        Math.round(Math.random() * (NAMES.length - 1))
    ].toLowerCase()}${NAMES[
        Math.round(Math.random() * (NAMES.length - 1))
    ].charAt(0)}@gmail.com`;

    return {
        id: id.toString(),
        name,
        email,
        phone: (Math.floor(Math.random() * 900000) + 100000).toString()
    };
}
