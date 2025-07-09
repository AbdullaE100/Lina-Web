// Import required modules
const fetch = require('node-fetch');

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

// SQL to create the table
const createTableSQL = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admins to select" ON public.contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions (created_at);
`;

// Function to send a test request to check if the table exists
async function testTableExists() {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions?select=*&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });

    if (response.ok) {
      console.log('Table already exists!');
      return true;
    }

    const error = await response.json();
    if (error.code === '42P01') { // PostgreSQL error code for "table does not exist"
      console.log('Table does not exist.');
      return false;
    }

    console.error('Error testing table existence:', error);
    return false;
  } catch (error) {
    console.error('Error testing table:', error);
    return false;
  }
}

// Make a direct API call to create the table
async function createTable() {
  try {
    const tableExists = await testTableExists();
    
    if (tableExists) {
      console.log('Table already exists, no need to create it.');
      return;
    }
    
    // Try creating the table using the Supabase API
    console.log('Attempting to create the table...');
    
    // Create a test record
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message',
      submitted_at: new Date().toISOString()
    };
    
    console.log('Creating test record to verify table creation');
    
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(testData)
    });
    
    if (insertResponse.ok) {
      console.log('Test record created successfully!');
      const data = await insertResponse.json();
      console.log('Response:', data);
    } else {
      const error = await insertResponse.text();
      console.error('Error creating test record:', error);
      console.log('This likely means the table does not exist yet.');
    }
  } catch (error) {
    console.error('Error in createTable function:', error);
  }
}

// Run the function
createTable();
