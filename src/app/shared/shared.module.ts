import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    declarations: [GridComponent, FilterComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule
    ],
    exports: [CommonModule, GridComponent, FilterComponent]
})
export class SharedModule {}
