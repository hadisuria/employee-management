# Employee Management

HR backoffice Single Page Application built with Angular 21, standalone components, Angular Signals, Reactive Forms, and `@angular/cdk/layout` responsive breakpoints.

## Features

- **Authentication (`/login`):** Reactive Form validation, password visibility toggle, inline error states, loading state, `sessionStorage`-backed session state, and route guards (`authGuard` / `guestGuard`).
- **Employee List (`/employees`):**
  - 120 deterministic dummy employees seeded across 10 groups (`src/app/core/data/`).
  - Multi-parameter **AND** search (`Name / Username`, `Email`, searchable `Group` dropdown) plus `Reset filters`.
  - Server-style sorting across `Username`, `Name`, `Email`, `Group`, `Basic Salary`, and `Status`.
  - Page size selector (`10`, `25`, `50`, `100`) and pagination controls.
  - Row **Edit** (amber warning toast) and **Delete** (red danger toast) actions.
  - Responsive layout powered by `@angular/cdk/layout` (`Breakpoints.XSmall` renders stacked mobile cards and a mobile navigation drawer).
- **Add Employee (`/employees/add`):** 2-column desktop / 1-column mobile Reactive Form with 9 mandatory fields, `birthDate <= today` validation, decimal salary validation, custom searchable group selector, and session persistence.
- **Employee Detail (`/employees/:username`):** Structured detail card formatting salaries as `Rp. xx.xxx,xx` (`RupiahPipe`), formatted timestamps, unknown-user fallback, and `OK` navigation preserving previous list filters, sort, and page state.

## Environment

- **Node.js:** `v20.19.2`
- **npm:** `10.8.2`
- **Angular:** `^21.2.0` (`@angular/cli` `21.2.30`, `@angular/material` `^21.2.14`)
- **Test Runner:** Vitest (`^4.0.8`)

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
- **Password:** `admin123`

## Scripts

- `npm start` — Run local dev server at `http://localhost:4200`
- `npm run build` — Build production bundle into `dist/employee-management`
- `npm test -- --watch=false` — Run Vitest unit tests

## Switching to a Real Backend

API calls live in `src/app/core/api/` (`AuthApiService` and `EmployeeApiService`) and use standard Angular `HttpClient`. During local/standalone runs without a backend, requests to `/api/*` are handled by `mockApiInterceptor` registered in `environment.httpInterceptors`.

To connect a real REST backend in production:

1. Open `src/environments/environment.ts`.
2. Set `apiBaseUrl` to your backend URL.
3. Remove `mockApiInterceptor` from `httpInterceptors` (leaving `[authInterceptor]`).

Angular's `fileReplacements` configuration automatically tree-shakes the mock interceptor and dummy seed datasets out of the production bundle when `mockApiInterceptor` is removed from `environment.ts`.
