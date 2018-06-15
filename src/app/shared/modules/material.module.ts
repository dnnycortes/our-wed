import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule
    ],
    declarations: [

    ],
    exports: [
        MatButtonModule,
        MatDialogModule
    ]
})


export class MaterialModule { }
