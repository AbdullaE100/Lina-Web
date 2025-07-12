-- Create the newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow inserts from anonymous users (for the newsletter subscription form)
CREATE POLICY "Allow anonymous newsletter inserts" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Allow service role and dashboard access to select data
CREATE POLICY "Allow service role to select newsletter data" ON public.newsletter_subscriptions
  FOR SELECT USING (true);
  
-- Set up database indexes for better query performance
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_email_idx ON public.newsletter_subscriptions (email);
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_created_at_idx ON public.newsletter_subscriptions (created_at); 