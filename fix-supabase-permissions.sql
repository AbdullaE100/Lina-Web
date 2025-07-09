-- Drop the existing restrictive policy that prevents viewing data
DROP POLICY IF EXISTS "Allow admins to select" ON public.contact_submissions;

-- Create a new policy that allows viewing the data without authentication
CREATE POLICY "Allow anyone to select" ON public.contact_submissions
  FOR SELECT USING (true);

-- This keeps the existing policy that allows form submissions from anyone
-- No need to modify that policy as it's working correctly 