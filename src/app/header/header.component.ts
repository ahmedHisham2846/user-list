import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { MaterialModule } from '../material/material.module';
import { IUser, User } from '../models/user.model';
import { UsersService } from '../users/users.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router, RouterModule } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { UserFullNamePipe } from '../pipes/user-full-name.pipe';
import { ErrorAlertService } from '../services/error-alert.service';
import { environment } from '../../environments/environment.development';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserFullNamePipe,
        MaterialModule,
        RouterModule
    ],
    providers: [
        { provide: UsersService, useClass: UsersService }
    ],
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    public myControl: FormControl = new FormControl(null);
    public filteredUser: IUser | null = null;
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        public readonly loaderSVC: LoaderService,
        private readonly userSVC: UsersService,
        private readonly errorSVC: ErrorAlertService,
        private readonly routerSVC: Router,
    ) { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        this.myControl.valueChanges.pipe(
            debounceTime(500),
            filter(userId => userId),
            filter(userId => !userId.email),
            tap(() => this.loaderSVC.startLoader()),
            switchMap(userId => this.userSVC.getUserDetails(userId)),
            map(userRes => userRes.data),
        ).subscribe({
            next: (user) => {
                this.loaderSVC.stopLoader();
                if (!user) {
                    this.filteredUser = null;
                    return;
                }
                this.filteredUser = user;
            },
            error: () => {
                this.loaderSVC.stopLoader();
                this.errorSVC.openErrorAlert(environment.ERROR_MESSAGE);
            },
        });
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public userSelected(event: MatAutocompleteSelectedEvent): void {
        const user: IUser = new User(event.option.value);
        this.routerSVC.navigate(['/user/details', user.id]);
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public displayFn(user: IUser): string {
        if (!user || !user?.first_name) return '';
        return `${user.first_name} ${user.last_name}`;
    };
}
