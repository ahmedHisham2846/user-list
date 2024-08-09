import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/user.model';

@Pipe({
    name: 'userFullName',
    standalone: true
})
export class UserFullNamePipe implements PipeTransform {
    transform(user: IUser): string {
        if (!user.first_name) return '';
        return `${user.first_name} ${user.last_name}`;
    }
}
