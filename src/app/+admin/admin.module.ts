import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRouterModule } from './admin.routing';

@NgModule({
    id: module.id,
    imports:[AdminRouterModule],
    exports:[AdminComponent],
    declarations:[AdminComponent]
})
export class AdminModule{}