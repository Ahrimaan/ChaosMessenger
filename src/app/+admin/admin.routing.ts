import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    id: module.id,
    imports:[RouterModule.forChild([{
        path:'admin'
    }])],
    exports:[RouterModule]
})
export class AdminRouterModule{}