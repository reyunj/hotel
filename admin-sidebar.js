// Reusable Sidebar Component
function loadSidebar(activePage) {
    const sidebarHTML = `
    <!-- Sidebar Overlay -->
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <a href="admin.html" class="sidebar-logo" onclick="closeSidebarOnMobile(event)">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                Tagboanan Resort
            </a>
        </div>

        <nav class="sidebar-nav">
            <div class="nav-section">
                <a href="admin.html" class="nav-item ${activePage === 'admin' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    Dashboard
                </a>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Management</div>
                <a href="rooms.html" class="nav-item ${activePage === 'rooms' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 21h18"/>
                        <path d="M5 21V7l8-4 8 4v14"/>
                        <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/>
                    </svg>
                    Rooms
                </a>
                <a href="user-management.html" class="nav-item ${activePage === 'guests' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Users
                </a>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Operations</div>
                <a href="inventory.html" class="nav-item ${activePage === 'inventory' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                    Inventory
                </a>
                <a href="food-menu.html" class="nav-item ${activePage === 'food' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                        <line x1="6" y1="1" x2="6" y2="4"/>
                        <line x1="10" y1="1" x2="10" y2="4"/>
                        <line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                    Food & Beverage
                </a>
                <a href="reports.html" class="nav-item ${activePage === 'reports' ? 'active' : ''}" onclick="closeSidebarOnMobile(event)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                    Reports
                </a>
            </div>
        </nav>

        <div class="sidebar-footer">
            <div class="user-profile">
                <div class="user-avatar">AD</div>
                <div class="user-info">
                    <div class="user-name">Admin User</div>
                    <div class="user-role">Manager</div>
                </div>
            </div>
        </div>
    </aside>
    `;

    // Inject sidebar before main content
    const body = document.body;
    const mainContent = document.querySelector('.main-content');
    
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforebegin', sidebarHTML);
    } else {
        body.insertAdjacentHTML('afterbegin', sidebarHTML);
    }
}

// Toggle sidebar function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Close sidebar on mobile when clicking a link
function closeSidebarOnMobile(event) {
    // Check if we're on mobile/tablet (screen width <= 1024px)
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }
}
