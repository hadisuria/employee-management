# Employee Management

HR backoffice Single Page Application built with Angular 21, Angular Material M3, standalone components, Angular Signals, Reactive Forms, and `@angular/cdk/layout`.

## Features

- **Theme & Dark Mode:** Material 3 theming (`styles.scss` + `styles_theme-colors.scss`) with `light` / `dark` color-scheme toggle animating radially from the clicked toggle button via the View Transitions API (`ThemeService`) and persisted in `localStorage`.
- **Authentication (`/login`):** Vertically centered login card with Reactive Form validation, password visibility toggle, inline error states, loading spinner, `sessionStorage`-backed session state, and route guards (`authGuard` / `guestGuard`).
- **Employee List (`/employees`):**
  - 100 dummy employees seeded across 10 groups (`src/app/core/data/`) with date-only `birthDate` (`YYYY-MM-DD`) and string `description` (`N/A` or short HR notes).
  - Multi-parameter **AND** search (`Name or username`, `Email`, searchable `Group` dropdown) plus `Reset`.
  - **Hide / Show salary** toggle masking/revealing basic salaries (`Rp. ••••••••` ↔ `Rp. xx.xxx,xx`), preserved across detail navigation.
  - 3-state Material sorting (`asc` → `desc` → default order) across `Username`, `Name`, `Email`, `Group`, `Basic Salary`, and `Status`.
  - `MatPaginator` with page size selector (`10`, `25`, `50`, `100`).
  - Row **Edit** (`/employees/:username/edit`) and **Delete** (Material `MatDialog` confirmation, red danger toast, and live list refresh).
  - Responsive layout powered by `@angular/cdk/layout` (`Breakpoints.XSmall` renders mobile cards and a Material navigation menu).
- **Create & Edit Employee (`/employees/add`, `/employees/:username/edit`):** Shared 2-column desktop / 1-column mobile Material Reactive Form (`EmployeeFormComponent`) with 9 mandatory fields, **Date of Birth** Material Datepicker (`birthDate <= today`), decimal salary validation, searchable `Group` selector, string **Description**, duplicate username detection (`409`), green toast on create, and amber warning toast on update.
- **Employee Detail (`/employees/:username`):** Structured detail card showing formatted `Date of Birth` (date-only `dd MMM yyyy`), plain string `Description`, `Basic salary` (`Rp. xx.xxx,xx` via `RupiahPipe`), `Status` badge, **Edit** / **Delete** actions, unknown-user fallback, and **Back** navigation preserving previous list filters, sort, page, and salary visibility state.

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
