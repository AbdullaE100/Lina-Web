import { supabase } from './supabase';

/**
 * Subscribe an email to the newsletter
 * @param email The email to subscribe
 * @returns An object containing success status and any error message
 */
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Input validation
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please provide a valid email address.' };
    }

    // Check if email already exists
    const { data: existingSubscription } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .eq('email', email)
      .single();

    if (existingSubscription) {
      return { success: true }; // Already subscribed, but don't tell the user for privacy reasons
    }

    // Insert new subscription
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .insert([
        { email, subscribed_at: new Date().toISOString() }
      ]);

    if (error) {
      console.error('Error subscribing to newsletter:', error);
      return { success: false, error: 'Failed to subscribe. Please try again later.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error during newsletter subscription:', err);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
} 