export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class User implements IUser {
    public id: number;
    public email: string;
    public first_name: string;
    public last_name: string;
    public avatar: string;

    constructor(o: any) {
        this.id = o.id || 0;
        this.email = o.email || '';
        this.first_name = o.first_name || '';
        this.last_name = o.last_name || '';
        this.avatar = o.avatar || '';
    }
}

export interface ISupport {
    url: string;
    text: string;
}

export interface IPaginatedUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: ISupport;
}

export interface IUserDetailsResponse {
    data: IUser;
    support: ISupport;
}