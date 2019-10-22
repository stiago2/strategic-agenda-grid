import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { FilterComponent } from './filter/filter.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [GridComponent, FilterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatProgressSpinnerModule
    ],
    exports: [CommonModule, GridComponent, FilterComponent]
})
export class SharedModule {}
