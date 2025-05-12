# SenShop

A modern, minimalist, and aesthetic e-commerce platform built with Next.js 14 (App Router) and Medusa.js.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) with Tailwind CSS
- **Backend**: Medusa.js (Node.js-based Headless Commerce Backend)
- **Database**: PostgreSQL
- **Payments**: Stripe
- **Deployment**: Vercel (Frontend) + Railway/Render (Medusa Backend)

## Project Structure

```
SenShop/
├── src/                # Frontend source code
│   ├── app/            # App Router pages
│   ├── components/     # UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── services/       # API services
├── public/             # Static assets
├── senshop-backend/    # Medusa.js backend
│   ├── src/            # Backend source code
│   ├── medusa-config.ts # Medusa configuration
│   └── ...
└── ...                 # Configuration files
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- Yarn or npm

### Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file with the following configuration:
   ```
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
   NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd senshop-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your PostgreSQL connection in `.env` file:
   ```
   DATABASE_URL=postgres://username:password@localhost:5432/medusa-db
   ```

4. Run migrations:
   ```bash
   npx medusa migrations run
   ```

5. Seed the database:
   ```bash
   npx medusa seed --seed-file=data/seed.json
   ```

6. Start the development server:
   ```bash
   npx medusa develop
   ```

## Features

- Modern, responsive design
- Product listings and details
- Collections
- Shopping cart
- Checkout with Stripe
- User authentication
- Order history
- Admin dashboard (via Medusa Admin)

## Deployment

### Frontend (Next.js)

The frontend can be deployed to Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy

### Backend (Medusa.js)

The backend can be deployed to Railway or Render:

1. Set up a PostgreSQL database
2. Configure environment variables
3. Deploy the Medusa backend

## License

This project is licensed under the MIT License.
