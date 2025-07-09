// ES module syntax
import { createClient } from '@supabase/supabase-js';

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  console.log('Testing if the contact_submissions table exists by attempting an insert...');
  
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        submitted_at: new Date().toISOString()
      })
      .select();
    
    if (error) {
      console.log('Error object:', error);
      
      if (error.message && error.message.includes('does not exist')) {
        console.log('Table does not exist. Please create it using the SQL in create_table.sql.');
      } else if (error.code === '42P01') { // PostgreSQL error code for relation does not exist
        console.log('Table does not exist. Please create it using the SQL in create_table.sql.');
      } else {
        console.error('Error inserting test record:', error);
      }
      
      // Regardless of the specific error, show the SQL
      console.log('\nSQL to run in the Supabase SQL Editor:');
      console.log(`
-- Create UUID extension if not already present
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  investment_type TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow inserts from anonymous users (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow admins (authenticated users) to select data
CREATE POLICY "Allow admins to select" ON public.contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
  
-- Set up database indexes for better query performance
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions (created_at);
      `);
      
      console.log('\nSteps to create the table:');
      console.log('1. Go to the Supabase dashboard: https://ytnarwsixcqdkwbnmhof.supabase.co/dashboard');
      console.log('2. Navigate to the SQL Editor');
      console.log('3. Create a new query and paste the SQL above');
      console.log('4. Run the SQL query');
    } else {
      console.log('Success! The table exists and a test record was inserted:');
      console.log(data);
      console.log('\nYour contact form is ready to collect submissions!');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    
    console.log('\nSQL to run in the Supabase SQL Editor:');
    console.log(`
-- Create UUID extension if not already present
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  investment_type TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow inserts from anonymous users (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow admins (authenticated users) to select data
CREATE POLICY "Allow admins to select" ON public.contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
  
-- Set up database indexes for better query performance
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions (created_at);
    `);
    
    console.log('\nSteps to create the table:');
    console.log('1. Go to the Supabase dashboard: https://ytnarwsixcqdkwbnmhof.supabase.co/dashboard');
    console.log('2. Navigate to the SQL Editor');
    console.log('3. Create a new query and paste the SQL above');
    console.log('4. Run the SQL query');
  }
}

// Run the test
testInsert(); 