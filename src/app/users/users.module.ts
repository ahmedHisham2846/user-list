import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { UserFullNamePipe } from '../pipes/user-full-name.pipe';
import { UsersService } from './users.service';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: UserListComponent },
    { path: 'details/:id', component: UserDetailsComponent, data: { isUserDetails: true } },
];

@NgModule({
    declarations: [
        UserListComponent,
        UserCardComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        UserFullNamePipe
    ],
    providers: [
        { provide: UsersService, useClass: UsersService }
    ]
})
export class UsersModule { }
