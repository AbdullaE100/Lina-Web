# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ecdc5aa7-b173-4b87-9485-4db138c07e5c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ecdc5aa7-b173-4b87-9485-4db138c07e5c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ecdc5aa7-b173-4b87-9485-4db138c07e5c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Setting up Newsletter Subscription Functionality

This project includes a newsletter subscription feature that uses Supabase as the backend. Follow these steps to set it up:

### 1. Create the Newsletter Subscriptions Table

The project includes a migration script to create the necessary table in your Supabase database:

```sh
# Set your Supabase service key as an environment variable
export SUPABASE_SERVICE_KEY=your_supabase_service_key

# Run the migration script
node create-newsletter-table.js
```

### 2. How the Newsletter Subscription Works

- The subscription form is located in the footer of the website
- When a user submits their email, it's stored in the `newsletter_subscriptions` table in Supabase
- The system checks for duplicate emails to prevent multiple subscriptions
- Success/error messages are displayed using toast notifications

### 3. Accessing Subscriber Data

You can access and manage your newsletter subscribers through the Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to the "Table Editor" section
3. Select the `newsletter_subscriptions` table
4. Here you can view, export, or manage your subscriber list
