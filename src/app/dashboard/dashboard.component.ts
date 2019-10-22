import { Component } from '@angular/core';
import { Customer } from '@core/Models/customer.model';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'sa-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    customers: Customer[];
    loading = false;

    constructor(private dashboardService: DashboardService) {
        this.getUsers('');
    }

    getUsers(filterValue: string) {
        this.loading = true;
        this.customers = [];
        this.dashboardService.getCustomers(filterValue).subscribe(data => {
            this.customers = data;
            this.loading = false;
        });
    }

    applyFilter(filterValue: string) {
        this.getUsers(filterValue);
    }
}
