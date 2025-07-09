import { createClient } from '@supabase/supabase-js';

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

// Create a supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Try to insert a test record
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      investment_type: 'test',
      message: 'This is a test message',
      submitted_at: new Date().toISOString()
    };
    
    console.log('Attempting to insert test data:', testData);
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select();
      
    if (error) {
      console.error('Error inserting test data:', error);
    } else {
      console.log('Test data inserted successfully:', data);
      
      // Now try to retrieve the data
      const { data: retrievedData, error: retrieveError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(5);
        
      if (retrieveError) {
        console.error('Error retrieving data:', retrieveError);
      } else {
        console.log('Successfully retrieved data. Last 5 entries:');
        console.log(JSON.stringify(retrievedData, null, 2));
      }
    }
  } catch (error) {
    console.error('Exception:', error);
  }
}

// Run the test
testSupabaseConnection(); 