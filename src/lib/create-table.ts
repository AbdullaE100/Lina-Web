import { supabase } from './supabase';

async function createContactSubmissionsTable() {
  console.log('Creating contact_submissions table...');
  
  try {
    // Execute SQL to create the table
    const { data, error } = await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          investment_type TEXT,
          message TEXT NOT NULL,
          submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `
    });

    if (error) {
      console.error('Error creating table:', error);
    } else {
      console.log('Table created successfully');
    }
  } catch (error) {
    console.error('Exception:', error);
  }
}

createContactSubmissionsTable(); 