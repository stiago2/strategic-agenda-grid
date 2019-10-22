import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from '@core/Models/user.model';
import { GridComponent } from '@shared/grid/grid.component';

/** Constants used to fill up our data base. */
const COLORS: string[] = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
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

@Component({
    selector: 'sa-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @ViewChild('child', { static: true }) grid: GridComponent;
    public users: Array<UserData> = Array.from({ length: 100 }, (_, k) =>
        createNewUser(k + 1)
    );

    constructor() {}

    ngOnInit() {}

    applyFilter(filterValue: string) {
        this.grid.applyFilter(filterValue);
    }
}

function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

    return {
        id: id.toString(),
        name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
