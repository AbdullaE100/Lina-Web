import { supabase } from './supabase';

async function testSupabaseConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Check if we can connect to Supabase
    const { data: versionData, error: versionError } = await supabase.rpc('version');
    
    if (versionError) {
      console.error('Error checking Supabase version:', versionError);
    } else {
      console.log('Supabase version:', versionData);
    }

    // Try to insert a test record
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
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
    }
  } catch (error) {
    console.error('Exception:', error);
  }
}

// Run the test
testSupabaseConnection(); 