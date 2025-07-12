const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase connection details
const supabaseUrl = 'https://ytnarwsixcqdkwbnmhof.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

if (!supabaseServiceKey) {
  console.error('Error: SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

// Create a supabase client with the service key for admin access
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createNewsletterTable() {
  try {
    // Read the SQL file
    const sqlFilePath = path.join(__dirname, 'newsletter-subscriptions.sql');
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

    // Execute the SQL
    const { error } = await supabase.rpc('exec_sql', { sql: sqlContent });

    if (error) {
      console.error('Error executing SQL:', error);
      process.exit(1);
    }

    console.log('Newsletter subscriptions table created successfully!');
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

createNewsletterTable(); 