import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {
    constructor(
        private readonly snackBar: MatSnackBar,
    ) { }

    public openErrorAlert(message: string, action: string = 'X'): void {
        this.snackBar.open(message, action, { duration: environment.ALERT_DURATION });
    }
}
