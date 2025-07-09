#!/bin/bash

# Supabase connection details
SUPABASE_URL="https://ytnarwsixcqdkwbnmhof.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bmFyd3NpeGNxZGt3Ym5taG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjE5MTUsImV4cCI6MjA2NzYzNzkxNX0.-vET2gyw1rrhU1RZg6bRQK3MYDrWqT5U13Kb74bdtvk"

# SQL query to create table (escaped for use in curl command)
SQL_QUERY=$(cat <<EOF
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
EOF
)

echo "Attempting to create contact_submissions table..."

# First, let's try to insert a test record to see if the table exists
TEST_RESPONSE=$(curl -s -X GET "${SUPABASE_URL}/rest/v1/contact_submissions?select=*&limit=1" \
  -H "apikey: ${SUPABASE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_KEY}")

# Check if the table exists based on the response
if [[ $TEST_RESPONSE == *"does not exist"* ]]; then
  echo "Table 'contact_submissions' does not exist. Creating it now..."
  
  # The table needs to be created manually through the SQL editor
  echo "To create the table, please follow these steps:"
  echo "1. Go to the Supabase dashboard: ${SUPABASE_URL}/dashboard"
  echo "2. Navigate to the SQL Editor"
  echo "3. Create a new query and paste the following SQL:"
  echo "$SQL_QUERY"
  echo "4. Run the SQL query"
  echo "5. Once completed, the contact form will be ready to collect submissions"
  
  # For convenience, also provide a curl command to verify if the table was created
  echo -e "\nAfter creating the table, you can run the following command to verify:"
  echo "curl -X GET \"${SUPABASE_URL}/rest/v1/contact_submissions?select=*&limit=1\" \\"
  echo "  -H \"apikey: ${SUPABASE_KEY}\" \\"
  echo "  -H \"Authorization: Bearer ${SUPABASE_KEY}\""
else
  echo "Table 'contact_submissions' already exists. No need to create it."
  echo "Response from the table: $TEST_RESPONSE"
fi 