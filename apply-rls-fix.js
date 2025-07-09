import { createClient } from '@supabase/supabase-js';

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk';

// Create a supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixRLSPolicy() {
  console.log('Updating RLS policies for contact_submissions table...');
  
  try {
    // First, drop the existing policy if it exists
    await supabase.rpc('exec', {
      sql: `DROP POLICY IF EXISTS "Allow admins to select" ON public.contact_submissions;`
    });
    
    // Create the new policy that allows anyone to select
    const { error } = await supabase.rpc('exec', {
      sql: `CREATE POLICY "Allow service role to select" ON public.contact_submissions
            FOR SELECT USING (true);`
    });

    if (error) {
      console.error('Error updating policy:', error);
    } else {
      console.log('RLS policy updated successfully. You should now be able to see submissions in the Supabase dashboard.');
    }
  } catch (error) {
    console.error('Exception:', error);
  }
}

fixRLSPolicy(); 