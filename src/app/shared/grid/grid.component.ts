import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '@core/Models/customer.model';

@Component({
    selector: 'sa-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
    dataSource: MatTableDataSource<Customer>;

    @Input() config;
    @Input() loading: boolean;
    @Input()
    set customers(customers: Customer[]) {
        if (customers) {
            this.dataSource = new MatTableDataSource(customers);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
    }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {}
}
