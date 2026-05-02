-- Supabase RBAC Setup for Hotel Admin System
-- Run this in Supabase SQL Editor to create role-based access control tables

-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create role_permissions table
CREATE TABLE IF NOT EXISTS role_permissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    page_name TEXT NOT NULL,
    can_access BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(role_id, page_name)
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role_id UUID REFERENCES roles(id) ON DELETE SET NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- RLS policies for demo (allow all operations)
CREATE POLICY "Enable all access for roles" ON roles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for role_permissions" ON role_permissions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for users" ON users FOR ALL USING (true) WITH CHECK (true);

-- Insert default admin role
INSERT INTO roles (name, description) 
VALUES ('Super Admin', 'Full access to all pages')
ON CONFLICT (name) DO NOTHING;

-- Insert default permissions for Super Admin (all pages)
INSERT INTO role_permissions (role_id, page_name, can_access)
SELECT 
    (SELECT id FROM roles WHERE name = 'Super Admin'),
    unnest(ARRAY['admin.html', 'inventory.html', 'food-menu.html', 'active-orders.html', 'reports.html', 'employee-management.html', 'user-management.html']),
    true
ON CONFLICT (role_id, page_name) DO NOTHING;

-- Insert default admin user (password: admin123 - in production, use proper hashing)
INSERT INTO users (email, full_name, role_id, password_hash)
VALUES (
    'admin@tagboanan.com',
    'Super Admin',
    (SELECT id FROM roles WHERE name = 'Super Admin'),
    'admin123'
)
ON CONFLICT (email) DO NOTHING;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_role_permissions_role_id ON role_permissions(role_id);
CREATE INDEX IF NOT EXISTS idx_users_role_id ON users(role_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
