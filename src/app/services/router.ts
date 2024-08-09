import { environment } from "../../environments/environment.development";

const USERS_CONTROLLER = `${environment.USER_API_URL}/users`;

export let routes = {
    paginated_users: `${USERS_CONTROLLER}`,
    user_details   : `${USERS_CONTROLLER}`,
};