# Employee Management

HR backoffice Single Page Application built with Angular 21, Angular Material M3, standalone components, Angular Signals, Reactive Forms, and `@angular/cdk/layout`.

## Environment

- **Node.js:** `v20.19.2`
- **npm:** `10.8.2`
- **Angular:** `^21.2.0` (`@angular/cli` `21.2.30`, `@angular/material` `^21.2.14`)

## Getting Started

```bash
git clone https://github.com/hadisuria/employee-management.git
cd employee-management
npm install
npm start
```

Open `http://localhost:4200` in your browser.

### Demo Login Credentials

- **Username:** `admin`
- **Password:** `123`

## Scripts

- `npm start` — Run local dev server at `http://localhost:4200`
- `npm run build` — Build production bundle into `dist/employee-management`

## Switching to a Real Backend

API calls live in `src/app/core/api/` (`AuthApiService` and `EmployeeApiService`) and use standard Angular `HttpClient` (`POST /api/auth/login`, `GET /api/groups`, `GET/POST /api/employees`, `GET/PUT/DELETE /api/employees/:username`). During standalone runs without a backend, requests to `/api/*` are handled by `mockApiInterceptor` registered in `environment.httpInterceptors`.

To connect a real REST backend in production:

1. Open `src/environments/environment.ts`.
2. Set `apiBaseUrl` to your backend URL.
3. Remove `mockApiInterceptor` from `httpInterceptors` (leaving `[authInterceptor]`).

Angular's `fileReplacements` configuration automatically tree-shakes the mock interceptor and dummy seed datasets out of the production bundle when `mockApiInterceptor` is removed from `environment.ts`.
