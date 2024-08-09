import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { PageEvent } from '@angular/material/paginator';
import { map, tap } from 'rxjs';
import { IUser } from '../../models/user.model';
import { ErrorAlertService } from '../../services/error-alert.service';
import { environment } from '../../../environments/environment.development';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
    public users: IUser[] = [];
    public totalUsersCount: number = 0;
    public currentPageSize: number = 0;
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        private readonly userSVC: UsersService,
        private readonly errorSVC: ErrorAlertService,
        private readonly loaderSVC: LoaderService,
    ) { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void { this._loadUsersPage(1); }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public changePage(event: PageEvent): void { this._loadUsersPage(event.pageIndex + 1); }
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------ private ---------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    private _loadUsersPage(pageNo: number) {
        this.loaderSVC.startLoader();
        this.userSVC.listUsersPage(pageNo).pipe(
            tap(usersPage => this.totalUsersCount = usersPage.total),
            tap(usersPage => this.currentPageSize = usersPage.per_page),
            map(usersPage => usersPage.data)
        ).subscribe({
            next: (users) => {
                this.users = users;
                this.loaderSVC.stopLoader();
            },
            error: () => {
                this.errorSVC.openErrorAlert(environment.ERROR_MESSAGE);
                this.loaderSVC.stopLoader();
            },
        });
    }
}
