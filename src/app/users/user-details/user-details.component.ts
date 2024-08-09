import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser, User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subject, switchMap, takeUntil } from 'rxjs';
import { ErrorAlertService } from '../../services/error-alert.service';
import { environment } from '../../../environments/environment.development';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    public user: IUser = new User({});
    private unsubscribe: Subject<boolean> = new Subject<boolean>();
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        @Inject(DOCUMENT) private documentSVC: Document,
        private readonly userSVC: UsersService,
        private readonly errorSVC: ErrorAlertService,
        private readonly activatedRouteSVC: ActivatedRoute
    ) { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        this.activatedRouteSVC.paramMap.pipe(
            takeUntil(this.unsubscribe),
            filter(paramMap => paramMap.has('id')),
            map(paramMap => Number(paramMap.get('id'))),
            switchMap(userId => this.userSVC.getUserDetails(userId)),
            map(userRes => userRes.data)
        ).subscribe({
            next: (user) => { this.user = user; },
            error: () => { this.errorSVC.openErrorAlert(environment.ERROR_MESSAGE) },
        });
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngAfterViewInit(): void { this._toggleBackButtonVesibility(); }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnDestroy(): void {
        this._toggleBackButtonVesibility();
        this.unsubscribe.next(true);
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------ private ---------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    private _toggleBackButtonVesibility(): void {
        const backButton: Element | null = this.documentSVC.querySelector('#back-btn');
        if (!backButton) return;
        if (backButton?.classList.contains('!hidden')) {
            backButton?.classList.remove('!hidden');
            return;
        }
        backButton?.classList.add('!hidden');
    }
}
