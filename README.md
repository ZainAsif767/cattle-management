# Cattle Management System

A modern web application for managing cattle/goat sales with installment tracking. Built with React, TypeScript, and Firebase.

## Features

- **Customer Management**

  - Add and manage customer records
  - Track customer payment history
  - Delete customers when they withdraw

- **Invoice Management**

  - Create new invoices with installment plans
  - Track payment status
  - Export invoices as PDF
  - View payment history

- **Dashboard**
  - Overview of total sales
  - Pending payments tracking
  - Recent transactions
  - Customer statistics

## Tech Stack

- **Frontend**

  - Vite + React
  - TypeScript
  - Tailwind CSS
  - React Router
  - React Query
  - React Hook Form
  - React Table
  - React PDF

- **Backend**
  - Firebase
    - Authentication
    - Firestore Database
    - Cloud Functions (optional)

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/        # Reusable components
  │   ├── layout/       # Layout components
  │   ├── forms/        # Form components
  │   ├── tables/       # Table components
  │   └── ui/           # UI components
  ├── pages/            # Page components
  ├── services/         # API and service functions
  ├── hooks/            # Custom React hooks
  ├── contexts/         # React contexts
  ├── types/            # TypeScript types
  └── utils/            # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
