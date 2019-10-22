import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [NavBarComponent, FooterComponent],
    imports: [CommonModule, MatToolbarModule, FontAwesomeModule],
    exports: [NavBarComponent, FooterComponent]
})
export class CoreModule {}
