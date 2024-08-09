# UserList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Demonstration

This is a very small project consisting of only two pages, one displays all users in cards and the other displays only one card with details for this user.

## Tecnologies

- Angular CLI
- Angular Material
- Tailwind CSS

## Overall Architecture

### Core Modules

- AppModule: The root module of the application, importing essential modules and `standalone components`.
- UsersModule: Handles user-related functionalities, including user listing, details, and search.
- MaterialModule: exports all used `Angular Material` modules.

### Components

- AppComponent: The main app component, responsible for routing `(lazy loading)` and layout.
- HeaderComponent: Standalone component, displays a search box.
- UserListComponent: Displays a list of users.
- UserDetailsComponent: Displays detailed information about a user.
- UserCardComponent: Handle one user layout.

### Services

- UsersService: Retrieves product data from a backend API.
- ErrorAlertService: Handle view of error message `in this case, the error message show in a snackbar`.
- LoaderService: Handle the view of the loader `(progress bar)`.

### files
- `router.ts` File: Handle and store `API` routes.