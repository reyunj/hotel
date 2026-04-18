# Changelog

## 2026-04-18

### Added

- Added `food-menu.html` as a separate admin page for demo food menu management.
- Added `active-orders.html` as a separate admin page for demo active food order tracking.
- Added `reports.html` as a separate admin reporting page for food revenue, room revenue, inventory expenses, salary expenses, and estimated net income.
- Added `employee-management.html` as a separate HR/payroll reference page for employee attendance, rates, and salary monitoring.
- Added new navigation links in `admin.html` and `inventory.html` to access the new admin pages.

### Reporting Demo Flow

- Admin opens `Reports` from the admin navigation.
- Admin can switch between `Today`, `This Week`, and `This Month` to view static demo financial summaries.
- The reporting page shows food revenue, room revenue, inventory restocking expense, employee salary expense, and net income estimate.
- Charts and summary cards help admin compare income sources against operational costs.

### Employee Monitoring Demo Flow

- HR or admin opens `Employee` from the admin navigation.
- The page shows static employee attendance, role, employment basis, daily rate, and monthly salary reference.
- HR can use the page as a payroll preparation reference for attendance and salary review.
- Attendance alerts highlight employees with lateness or absences for follow-up.

### Food Menu Demo Flow

- Admin opens `Food Menu` from the admin navigation.
- Admin fills out a static form with menu name, category, price, image URL, availability, and description.
- New menu items are added to the top of the menu list for demo interaction.
- Admin can toggle each menu item between `available` and `unavailable`.
- Menu data is stored in browser `localStorage` only for demo playaround, with no backend connection.

### Active Orders Demo Flow

- Admin or staff opens `Active Orders` from the admin navigation.
- A static kitchen board displays sample active food tickets.
- Staff can filter orders by `all`, `preparing`, `ready`, and `served`.
- The page is designed as a reference board only and does not connect to any backend or live ordering system.

### Notes for Junior Developers

- The room dashboard in `admin.html` was left unchanged so existing booking demo behavior remains stable.
- The new food-related features were split into separate HTML pages to match the existing admin navigation pattern used by `inventory.html`.
- `food-menu.html` uses front-end-only state with `localStorage` so users can add and toggle menu items without a database.
- `active-orders.html` uses static JavaScript data to simulate the kitchen workflow and staff reference view.
- `reports.html` uses static report datasets and client-side calculations so you can prototype financial monitoring before connecting to a backend.
- `employee-management.html` keeps HR/payroll reference concerns separate from operations pages, making the admin suite easier to extend later.
