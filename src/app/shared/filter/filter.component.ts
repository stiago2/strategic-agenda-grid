import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'sa-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    @Output() applyFilter = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    filter(filterValue: string) {
        this.applyFilter.emit(filterValue);
    }
}
