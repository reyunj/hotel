# Changelog

## 2026-04-18

### Added
- Added `food-menu.html` as a separate admin page for demo food menu management.
- Added `active-orders.html` as a separate admin page for demo active food order tracking.
- Added new navigation links in `admin.html` and `inventory.html` to access the new admin pages.

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
