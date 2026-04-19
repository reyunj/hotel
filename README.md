# Tagboanan Beach Resort - Hotel Management Demo

A comprehensive pure HTML/CSS/JavaScript demo application for hotel resort management, featuring a complete guest-facing website and administrative dashboard.

## 🌊 About

Tagboanan Beach Resort is a demo hotel management system that showcases modern web development techniques for hospitality businesses. The application includes both customer-facing pages and a full administrative suite for managing operations.

## 🚀 Features

### Guest-Facing Website

- **Homepage** (`index.html`) - Beautiful hero section with resort imagery
- **About** (`about.html`) - Resort information and amenities
- **Booking** (`booking.html`) - Room reservation system
- **Checkout** (`checkout.html`) - Payment processing with multiple payment methods
- **Beach Passes** (`beachpasses.html`) - Additional service bookings

### Administrative Dashboard

- **Admin Panel** (`admin.html`) - Main dashboard with room setup, booking management, and statistics
- **Food Menu** (`food-menu.html`) - Menu item management with availability toggles
- **Active Orders** (`active-orders.html`) - Kitchen order tracking and status updates
- **Reports** (`reports.html`) - Financial reporting with revenue analysis and expense tracking
- **Employee Management** (`employee-management.html`) - HR/payroll reference with attendance monitoring
- **Inventory** (`inventory.html`) - Stock management and restocking alerts

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage for demo data persistence
- **Styling**: Custom CSS with CSS Variables for theming
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Deployment**: Vercel (static hosting)
- **Images**: Supabase storage for hero images and assets

## 📁 Project Structure

```
hotel/
├── index.html                 # Main homepage
├── about.html                 # About page
├── booking.html               # Booking system
├── checkout.html              # Payment processing
├── beachpasses.html           # Beach pass bookings
├── admin.html                 # Main admin dashboard
├── food-menu.html             # Food menu management
├── active-orders.html         # Order tracking
├── reports.html               # Financial reports
├── employee-management.html   # HR/payroll reference
├── inventory.html             # Inventory management
├── public/                    # Static assets
│   ├── hotel.jpg             # Resort image
│   └── *-logo.*              # Payment method logos
├── vercel.json               # Vercel deployment config
├── README.md                 # This file
└── changelog.md              # Development changelog
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- No build tools or dependencies required

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/reyunj/hotel.git
cd hotel
```

2. Open `index.html` in your browser, or use a local server:

```bash
# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

### Demo Data

The application includes seeded demo data for:

- Sample room inventory
- Example bookings and guest data
- Food menu items
- Active orders
- Employee records
- Financial reports

All data is stored in browser localStorage for demonstration purposes.

## 📊 Admin Features

### Dashboard Overview

- Real-time statistics (occupied rooms, check-ins, total guests)
- Room inventory management with modal-based room creation
- Booking tracking and management
- Financial summaries and reporting

### Food Service Management

- Dynamic menu creation and editing
- Availability toggles for menu items
- Order status tracking (preparing → ready → served)
- Kitchen workflow visualization

### Business Intelligence

- Revenue analysis (food vs. room income)
- Expense tracking (inventory, salaries)
- Net income calculations
- Time-based reporting (daily, weekly, monthly)

### HR Management

- Employee attendance monitoring
- Salary and rate calculations
- Employment status tracking
- Payroll preparation references

## 🎨 Design System

- **Primary Colors**: Ocean blue theme (#0ea5e9, #0284c7)
- **Accent**: Warm orange (#f97316)
- **Backgrounds**: Sand and cream tones (#fef7ed, #faf8f5)
- **Typography**: Playfair Display (headings) + Inter (body text)
- **Responsive**: Mobile-first design approach

## 📝 Development Notes

- Pure client-side application with no backend dependencies
- Uses modern JavaScript features (ES6+, async/await, modules)
- Implements localStorage for data persistence in demo mode
- Modal-based interactions for better UX
- Responsive design for mobile and desktop
- Clean separation of concerns across HTML pages

## 📄 License

This is a demo project for educational and portfolio purposes.

---

_Built with ❤️ for demonstrating modern web development in hospitality management_
