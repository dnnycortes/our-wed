import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ],
    declarations: [

    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ]
})


export class MaterialModule { }
