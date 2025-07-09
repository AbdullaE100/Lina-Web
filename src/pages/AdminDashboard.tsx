import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { format } from "date-fns";

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  investment_type: string | null;
  message: string;
  submitted_at: string;
  created_at: string;
};

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .order("submitted_at", { ascending: false });

        if (error) {
          throw error;
        }

        setSubmissions(data || []);
      } catch (err) {
        console.error("Error fetching submissions:", err);
        setError("Failed to load contact submissions");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-luxury text-primary mb-6">Admin Dashboard</h1>
          <h2 className="text-2xl font-serif text-primary mb-10">Contact Form Submissions</h2>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No contact form submissions yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-background border border-border/10 rounded-lg shadow-soft">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="py-3 px-4 text-left font-ui font-medium text-primary">Name</th>
                    <th className="py-3 px-4 text-left font-ui font-medium text-primary">Email</th>
                    <th className="py-3 px-4 text-left font-ui font-medium text-primary">Phone</th>
                    <th className="py-3 px-4 text-left font-ui font-medium text-primary">Interest</th>
                    <th className="py-3 px-4 text-left font-ui font-medium text-primary">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="border-t border-border/10 hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-4 font-medium">{submission.name}</td>
                      <td className="py-4 px-4 text-primary/80">{submission.email}</td>
                      <td className="py-4 px-4 text-primary/80">{submission.phone || "—"}</td>
                      <td className="py-4 px-4 text-primary/80">
                        {submission.investment_type ? (
                          <span className="inline-block bg-gold/10 text-primary px-2 py-1 rounded-full text-xs">
                            {submission.investment_type}
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-primary/70 whitespace-nowrap">
                        {format(new Date(submission.submitted_at), "MMM d, yyyy h:mm a")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {submissions.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-luxury text-primary mb-4">Submission Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {submissions.map((submission) => (
                  <motion.div
                    key={submission.id}
                    className="bg-background p-6 rounded-xl shadow-soft border border-border/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold">{submission.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(submission.submitted_at), "MMM d, yyyy h:mm a")}
                      </span>
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-primary/60 text-sm">Email:</span>
                      <a href={`mailto:${submission.email}`} className="text-primary hover:text-gold transition-colors">
                        {submission.email}
                      </a>
                    </div>
                    {submission.phone && (
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-primary/60 text-sm">Phone:</span>
                        <a href={`tel:${submission.phone}`} className="text-primary hover:text-gold transition-colors">
                          {submission.phone}
                        </a>
                      </div>
                    )}
                    {submission.investment_type && (
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-primary/60 text-sm">Interest:</span>
                        <span className="inline-block bg-gold/10 text-primary px-2 py-1 rounded-full text-xs">
                          {submission.investment_type}
                        </span>
                      </div>
                    )}
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold mb-2">Message:</h5>
                      <p className="text-muted-foreground p-3 bg-primary/5 rounded-lg text-sm whitespace-pre-wrap">
                        {submission.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard; 