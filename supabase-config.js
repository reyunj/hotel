// Supabase Configuration for Hotel Admin System
// This file initializes the Supabase client for all admin pages

const SUPABASE_URL = 'https://qsbcdeehhcfuybyezmjd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYmNkZWVoaGNmdXlieWV6bWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODI0MTgsImV4cCI6MjA5MjI1ODQxOH0.h4Z1IM3cmH9Iw7XonkCMudkzvPMYNmR9Dh783iXDRyE';

// Initialize Supabase client
function initSupabaseClient() {
    if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        window.supabaseClient = supabase;
        console.log('Supabase client initialized successfully');
    } else {
        console.error('Supabase library not loaded yet, retrying...');
        setTimeout(initSupabaseClient, 100);
    }
}

// Initialize immediately
initSupabaseClient();
