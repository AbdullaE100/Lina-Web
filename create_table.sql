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