// ES module syntax
import fetch from 'node-fetch';

// Supabase connection details
const SUPABASE_URL = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

const SQL = `
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
`;

async function directSQLExecution() {
  try {
    console.log('Attempting to create the contact_submissions table...');
    
    // Execute SQL
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/pg_query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify({
        query: SQL
      })
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Error executing SQL:', result);
      console.log('\nInstead, create the table manually by following these steps:');
      console.log('1. Log into Supabase: https://ytnarwsixcqdkwbnmhof.supabase.co/dashboard');
      console.log('2. Go to the SQL Editor');
      console.log('3. Create a new query');
      console.log('4. Copy and paste the following SQL:');
      console.log(SQL);
      console.log('5. Run the query');
    } else {
      console.log('Success! Table created:', result);
      
      // Verify by inserting a test record
      console.log('\nVerifying table creation by inserting a test record...');
      
      const testResponse = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message for table verification',
          submitted_at: new Date().toISOString()
        })
      });
      
      const testResult = await testResponse.text();
      console.log('Test insert result:', testResult);
      
      if (testResponse.ok) {
        console.log('\nSuccess! Your contact form is ready to collect submissions!');
      } else {
        console.log('\nError during verification. Please check your Supabase dashboard.');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the function
directSQLExecution(); 