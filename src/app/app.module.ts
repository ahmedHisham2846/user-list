import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HeaderComponent,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
