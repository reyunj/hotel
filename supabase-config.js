// Supabase Configuration for Hotel Admin System
// This file initializes the Supabase client for all admin pages

const SUPABASE_URL = 'https://qsbcdeehhcfuybyezmjd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYmNkZWVoaGNmdXlieWV6bWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODI0MTgsImV4cCI6MjA5MjI1ODQxOH0.h4Z1IM3cmH9Iw7XonkCMudkzvPMYNmR9Dh783iXDRyE';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Make supabase available globally
window.supabaseClient = supabase;
