import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { routes } from '../services/router';
import { IPaginatedUsersResponse, IUserDetailsResponse } from '../models/user.model';

@Injectable()
export class UsersService {
    constructor(
        private http: HttpClient
    ) { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public listUsersPage(page: number): Observable<IPaginatedUsersResponse> {
        const params = {
            page
        };

        return of(true).pipe(
            switchMap(() => this.http.get<IPaginatedUsersResponse>(routes.paginated_users, { params })),
        );
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public getUserDetails(userId: number): Observable<IUserDetailsResponse> {
        return of(true).pipe(
            switchMap(() => this.http.get<IUserDetailsResponse>(`${routes.paginated_users}/${userId}`)),
        );
    }
}
