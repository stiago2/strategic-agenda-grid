import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sa-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>();
    filterValue = '';
    filterValueControl = new FormControl();
    formCtrlSub: Subscription;
    @Output() applyFilter = new EventEmitter();
    constructor() {}

    ngOnInit() {
        this.filterValueControl.valueChanges
            .pipe(
                takeUntil(this.unsubscribe$),
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe(newValue => {
                this.filterValue = newValue;
                this.applyFilter.emit(this.filterValue);
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
