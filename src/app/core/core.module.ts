import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [NavBarComponent, FooterComponent],
    imports: [CommonModule, MatToolbarModule],
    exports: [NavBarComponent, FooterComponent]
})
export class CoreModule {}
