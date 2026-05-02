// Access Control Middleware for Hotel Admin System
// This file provides role-based access control functionality

const ADMIN_PAGES = [
    'admin.html',
    'inventory.html',
    'food-menu.html',
    'active-orders.html',
    'reports.html',
    'employee-management.html',
    'user-management.html'
];

// Demo: Default to Super Admin access for demo purposes
// In production, this would check actual user authentication
let currentUserRole = null;
let currentUserPermissions = [];

async function initializeAccessControl() {
    // For demo: Check if user is logged in via localStorage
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            currentUserRole = user.roleId;
            currentUserPermissions = await loadUserPermissions(user.roleId);
        } catch (err) {
            console.error('Error parsing stored user:', err);
        }
    }
    
    // If no user stored, default to full access for demo
    if (!currentUserRole) {
        currentUserPermissions = ADMIN_PAGES;
    }
}

async function loadUserPermissions(roleId) {
    if (!roleId) return [];
    
    try {
        const { data, error } = await window.supabaseClient
            .from('role_permissions')
            .select('page_name')
            .eq('role_id', roleId)
            .eq('can_access', true);
        
        if (error) throw error;
        return data.map(p => p.page_name);
    } catch (err) {
        console.error('Error loading permissions:', err);
        return [];
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename || 'admin.html';
}

function hasPageAccess(pageName) {
    // For demo: if no permissions set, allow access
    if (currentUserPermissions.length === 0) return true;
    
    return currentUserPermissions.includes(pageName);
}

function checkAccess() {
    const currentPage = getCurrentPage();
    
    if (!hasPageAccess(currentPage)) {
        alert('You do not have permission to access this page.');
        window.location.href = 'admin.html';
        return false;
    }
    
    return true;
}

function filterNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !hasPageAccess(href)) {
            link.style.display = 'none';
        }
    });
}

// Demo function to simulate user login
async function demoLogin(userId) {
    try {
        const { data, error } = await window.supabaseClient
            .from('users')
            .select('*, roles(name)')
            .eq('id', userId)
            .single();
        
        if (error) throw error;
        
        localStorage.setItem('currentUser', JSON.stringify({
            id: data.id,
            email: data.email,
            fullName: data.full_name,
            roleId: data.role_id,
            roleName: data.roles?.name
        }));
        
        await initializeAccessControl();
        return data;
    } catch (err) {
        console.error('Error during demo login:', err);
        throw err;
    }
}

function demoLogout() {
    localStorage.removeItem('currentUser');
    currentUserRole = null;
    currentUserPermissions = ADMIN_PAGES; // Reset to full access for demo
    window.location.href = 'admin.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await initializeAccessControl();
    checkAccess();
    filterNavigationLinks();
});
