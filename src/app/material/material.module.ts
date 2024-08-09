import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [],
    exports:[
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatInputModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatCardModule
    ]
})
export class MaterialModule { }
