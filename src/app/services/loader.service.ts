import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor() { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public startLoader(): void { setTimeout(() => { this.isLoading.next(true); }); }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public stopLoader(): void { setTimeout(() => { this.isLoading.next(false); }); }
}
