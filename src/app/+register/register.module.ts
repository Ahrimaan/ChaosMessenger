import { NgModule } from '@angular/core';
import { RegisterRoutes } from './register.routes';
import { RegisterComponent } from './register.component';

@NgModule({
    id: module.id,
    imports:[RegisterRoutes],
    declarations: [RegisterComponent],
    exports: [RegisterComponent]
})
export class RegisterModule { }