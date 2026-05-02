# Changelog

## 2026-05-03

### Mobile Header Design Rollout

- Updated admin pages to use new mobile header design with burger menu animation
- Replaced old sidebar-toggle button with new mobile header structure across all pages
- Added tablet toggle button for sidebar expansion on tablet devices
- Updated toggleSidebar function to handle burger menu animation with active state
- Applied changes to: inventory.html, food-menu.html, active-orders.html, reports.html, employee-management.html
- Note: user-management.html already had the new mobile header structure, only toggleSidebar function was updated

### Changes Made

- **Mobile Header Structure**: Added `.admin-header-mobile` with burger menu, logo, and user avatar
- **Tablet Toggle Button**: Added `.sidebar-toggle-tablet` for sidebar expansion on tablets
- **Burger Menu Animation**: Updated toggleSidebar to toggle `.active` class on burger menu
- **Sidebar State Change**: Changed sidebar class toggle from `active` to `open` for consistency

### Notes for Junior Developers

- All admin pages now use consistent mobile header design
- Burger menu uses CSS transforms for animation (handled by `.active` class)
- ToggleSidebar function now handles both sidebar and burger menu state
- Mobile header includes quick logout via user avatar
- Tablet mode uses dedicated toggle button separate from mobile burger menu

## 2026-05-02 (Part 3)

### Mobile & Tablet Responsive Improvements

- Fixed broken mobile layout with proper header and burger menu implementation
- Added dedicated mobile header with logo and hamburger menu button
- Implemented tablet mode with collapsible sidebar (70px collapsed, 260px expanded)
- Added tablet toggle button for sidebar expansion
- Improved responsive breakpoints: Desktop (1025px+), Tablet (768-1024px), Mobile (<768px)
- Added smooth burger menu animation with active state
- Updated main content padding to account for mobile header height
- Added mobile user avatar in header for quick logout access

### Responsive Breakpoints

- **Desktop (1025px+)**: Full 260px sidebar always visible
- **Tablet (768-1024px)**: Collapsed 70px sidebar with toggle button to expand
- **Mobile (<768px)**: Hidden drawer with fixed header (64px) and burger menu
- **Small Mobile (<480px)**: Optimized spacing and font sizes

### Layout Improvements

- Mobile header: Fixed 64px height with logo, burger menu, user avatar
- Tablet toggle: Floating button that moves with sidebar expansion
- Sidebar positioning: Adjusts for mobile header (starts below header on mobile)
- Overlay: Proper z-index layering for mobile drawer
- Content padding: Accounts for mobile header height on small screens

### Notes for Junior Developers

- Mobile header uses `.admin-header-mobile` class (hidden on desktop)
- Burger menu animates with `.active` class (transforms to X)
- Tablet mode uses `.sidebar-toggle-tablet` button for sidebar expansion
- Main content uses `.admin-page-header` instead of `.admin-header`
- Mobile header height variable: `--header-height: 64px`
- Sidebar adjusts position on mobile: `top: var(--header-height)`
- Burger menu animation handled via CSS transforms

## 2026-05-02 (Part 2)

### Sidebar Navigation Layout

- Replaced header navigation with modern side panel menu across all admin pages.
- Created `admin-layout.css` with responsive sidebar layout system.
- Updated all admin pages (admin.html, inventory.html, food-menu.html, active-orders.html, reports.html, employee-management.html, user-management.html) to use sidebar navigation.
- Added mobile-responsive sidebar with toggle button and overlay.
- Improved navigation UX with icons, active states, and user profile section.
- Cleaned up navigation-related CSS and responsive styles.

### Layout Changes

- **Sidebar**: Fixed 260px width on desktop, slide-out on mobile
- **Main Content**: Adjusted to work with sidebar layout (margin-left: 260px on desktop)
- **Mobile**: Sidebar collapses by default, toggles via hamburger menu button
- **Navigation Items**: Added emoji icons for visual clarity
- **User Section**: Added user profile display with role in sidebar footer
- **Responsive**: Improved mobile experience with proper overlay and transitions

### Benefits

- Solves navigation crowding issue with 7+ admin pages
- Provides cleaner, more modern admin interface
- Better use of horizontal space for content
- Improved mobile navigation experience
- Consistent navigation across all admin pages
- Easier to scale with additional pages in the future

### Notes for Junior Developers

- All admin pages now share the same sidebar layout via `admin-layout.css`
- Sidebar toggle functionality handled by `toggleSidebar()` JavaScript function
- Active page highlighting handled via `active` class on nav items
- Access control integration maintained - navigation items hidden based on permissions
- Mobile breakpoint at 1024px switches from fixed sidebar to slide-out drawer
- Overlay appears on mobile when sidebar is open to dismiss when clicking outside

## 2026-05-02 (Part 1)

### Role-Based Access Control (RBAC) System

- Implemented complete role-based access control system for admin panel.
- Created `supabase-setup-rbac.sql` script for database table creation.
- Added new Supabase tables: `roles`, `role_permissions`, `users`.
- Created `user-management.html` page for role and user management.
- Implemented `access-control.js` middleware for permission checking.
- Added access control to all admin pages (admin.html, inventory.html, food-menu.html, active-orders.html, reports.html, employee-management.html).
- Updated navigation across all admin pages to include "User Management" link.

### Database Schema

- **roles**: Stores custom role definitions (id, name, description, created_at)
- **role_permissions**: Maps roles to page access permissions (role_id, page_name, can_access)
- **users**: Stores user accounts with role assignments (id, email, full_name, role_id, password_hash, created_at)

### User Management Features

- Role creation with custom name and description
- Page access permission checkboxes for each role (Dashboard, Inventory, Food Menu, Active Orders, Reports, Employee, User Management)
- User creation with email, full name, password, and role assignment
- Role list view with delete functionality
- User list view with role display and delete functionality
- Demo login/logout functions for testing access control

### Access Control Implementation

- Access control middleware checks user role permissions on page load
- Navigation links automatically hidden based on user permissions
- Unauthorized page access redirects to dashboard with alert
- Demo mode defaults to full access when no user is logged in
- Permissions loaded dynamically from Supabase based on user role

### Demo Setup

- SQL script creates default "Super Admin" role with all page permissions
- Default admin user (admin@tagboanan.com / admin123) created for testing
- RLS policies set to allow all operations for demo purposes
- Access control defaults to per-page restriction as requested for demo stage

### Notes for Junior Developers

- Run `supabase-setup-rbac.sql` in Supabase SQL Editor to create RBAC tables
- Access control is implemented at page level (demo stage) - can be extended to action-level permissions later
- The system uses localStorage for demo user session management
- In production, replace localStorage with proper authentication (Supabase Auth)
- Password hashing is not implemented in demo (plain text storage) - add bcrypt for production
- The `access-control.js` file is included in all admin pages after `supabase-config.js`
- Navigation filtering happens automatically on page load via `filterNavigationLinks()` function

## 2026-04-20

### Supabase Integration

- Connected the entire hotel admin application to Supabase backend-as-a-service.
- Created `supabase-config.js` as a shared configuration file for Supabase client initialization across all admin pages.
- Designed and implemented a complete database schema matching the existing frontend data structures.
- Created Supabase tables: `rooms`, `bookings`, `inventory`, `food_menu`, `food_orders`, `food_order_items`, and `employees`.
- Set up Row Level Security (RLS) policies to allow all operations for demo purposes.
- Seeded all tables with demo data matching the original hardcoded/static data.
- Updated all admin HTML pages to use Supabase API calls instead of localStorage or static arrays.

### Supabase Schema

- **rooms**: Stores room inventory (room_number, room_type, rate, description, status)
- **bookings**: Stores guest bookings (full_name, phone, guests, check_in, check_out, room_type, assigned_room, status)
- **inventory**: Stores resort supplies (category, item_name, description, quantity, status)
- **food_menu**: Stores food menu items (name, category, price, image, availability, description)
- **food_orders**: Stores food orders (order_number, guest_name, room_number, status, notes, total_amount)
- **food_order_items**: Stores individual items within food orders (order_id, item_name, quantity)
- **employees**: Stores employee records (full_name, position, employment_type, daily_rate, monthly_salary, attendance_days, late_count, absent_days, status)

### Page-by-Page Changes

- **admin.html**: Replaced localStorage calls with Supabase queries for rooms and bookings. Updated room form to save to Supabase. Made booking data loading async.
- **inventory.html**: Replaced hardcoded HTML with dynamic rendering from Supabase. Added Supabase client library. Updated Add Item modal to save to Supabase.
- **food-menu.html**: Replaced localStorage with Supabase for menu items. Updated availability toggle to update Supabase. Made menu loading async.
- **active-orders.html**: Replaced static order data with Supabase queries. Added Supabase client library. Made order loading async.
- **employee-management.html**: Replaced static employee array with Supabase queries. Added Supabase client library. Made employee loading async.
- **reports.html**: Replaced static report data with Supabase queries. Added Supabase client library. Calculated metrics from actual Supabase data.

### Notes for Junior Developers

- The Supabase client is initialized once in `supabase-config.js` and included in all admin pages via script tags.
- All data operations now use async/await pattern since Supabase calls are asynchronous.
- The database schema uses snake_case naming convention (e.g., `room_number`, `full_name`) which is transformed to camelCase in the frontend for consistency.
- RLS policies are set to allow all operations for demo purposes. In production, these should be restricted based on user roles.
- The Supabase project ID is `qsbcdeehhcfuybyezmjd` and the project URL is `https://qsbcdeehhcfuybyezmjd.supabase.co`.
- Demo data was seeded to match the original hardcoded values so the application behaves consistently.
- CSV export in inventory.html now works with dynamically loaded Supabase data by reading from the rendered DOM.
- All initialization calls (window.onload) have been updated to call async data loading functions.

## 2026-04-18

### Added

- Added a room setup form in `admin.html` so admins can create new room details in the demo dashboard.
- Added seeded demo booking data in `admin.html` so the dashboard shows sample values for occupied rooms, check-ins today, and total guests on first load.
- Added CSV export for the inventory list in `inventory.html` so admins can download the visible inventory items.
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

### Room Setup Demo Flow

- Admin opens `admin.html` and clicks the `Add Room` button in the `Room Setup` section.
- A popup modal opens so the room form stays hidden until needed.
- Admin enters room number, room type, nightly rate, default status, and room details.
- New room entries are saved into browser `localStorage` as part of the room inventory.
- Added rooms appear immediately in both the room inventory summary and the room overview cards.
- The `Room Inventory Summary` is displayed below the `Guest Statistics` section for easier dashboard scanning.

### Dashboard Stats Demo Flow

- On first load, if there are no existing bookings in browser storage, the admin dashboard seeds demo booking data.
- This makes the `Occupied`, `Check-ins Today`, and `Total Guests` cards show realistic sample values instead of staying empty.
- Once real demo bookings exist in `localStorage`, the dashboard continues using those stored bookings.

### Inventory Export Demo Flow

- Admin opens `inventory.html` and clicks the `Export CSV` button.
- The export reads the currently visible inventory items from the page.
- The browser downloads a CSV file with category, item name, description, quantity, and status.
- Newly added inventory items are included because the export uses the same DOM list the admin sees.

### Active Orders Demo Flow

- Admin or staff opens `Active Orders` from the admin navigation.
- A static kitchen board displays sample active food tickets.
- Staff can filter orders by `all`, `preparing`, `ready`, and `served`.
- The page is designed as a reference board only and does not connect to any backend or live ordering system.

### Notes for Junior Developers

- The room dashboard in `admin.html` was left unchanged so existing booking demo behavior remains stable.
- `admin.html` now separates room inventory data from booking data so admins can add rooms without changing booking records directly.
- The room creation experience now uses a modal popup so the dashboard stays cleaner and the form only appears when the admin needs it.
- The dashboard stats still use the existing calculation logic, but now start with seeded demo bookings so the top KPI cards are useful in a fresh session.
- `inventory.html` exports from the rendered inventory list instead of a separate data source, which keeps the CSV aligned with what the admin currently sees on screen.
- The new food-related features were split into separate HTML pages to match the existing admin navigation pattern used by `inventory.html`.
- `food-menu.html` uses front-end-only state with `localStorage` so users can add and toggle menu items without a database.
- `active-orders.html` uses static JavaScript data to simulate the kitchen workflow and staff reference view.
- `reports.html` uses static report datasets and client-side calculations so you can prototype financial monitoring before connecting to a backend.
- `employee-management.html` keeps HR/payroll reference concerns separate from operations pages, making the admin suite easier to extend later.
