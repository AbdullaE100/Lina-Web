// ESM style imports
import { createClient } from '@supabase/supabase-js';

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createContactSubmissionsTable() {
  try {
    console.log('Creating contact_submissions table...');
    
    // First try to insert a test row to see if the table exists
    const testInsert = await supabase
      .from('contact_submissions')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
        submitted_at: new Date().toISOString(),
      })
      .select();
    
    if (testInsert.error && testInsert.error.message.includes('does not exist')) {
      console.log('Table does not exist yet. Let\'s create it!');
      
      // Using the REST API to create the table with a POST request
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          query: `
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
            
            CREATE TABLE public.contact_submissions (
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
          `
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error creating table:', errorText);
      } else {
        console.log('Table created successfully!');
        
        // Try inserting again to verify table was created
        const verifyInsert = await supabase
          .from('contact_submissions')
          .insert({
            name: 'Test User',
            email: 'test@example.com',
            message: 'Test message',
            submitted_at: new Date().toISOString(),
          })
          .select();
          
        if (verifyInsert.error) {
          console.error('Error verifying table creation:', verifyInsert.error);
        } else {
          console.log('Verification insert successful:', verifyInsert.data);
          console.log('Table is ready for use!');
        }
      }
    } else if (testInsert.error) {
      console.error('Error testing table:', testInsert.error);
    } else {
      console.log('Table already exists and is working!', testInsert.data);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the function
createContactSubmissionsTable(); 