import { Component, input, InputSignal, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
    public user: InputSignal<IUser> = input.required<IUser>();
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor() { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void { }
}
