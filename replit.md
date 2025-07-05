# StellarOne Health - Revenue Cycle Management Platform

## Overview

StellarOne Health is a next-generation AI-powered Revenue Cycle Management (RCM) platform designed for healthcare providers in India and the US. The application is built as a full-stack web application featuring a comprehensive dashboard for managing claims, patients, revenue metrics, and various healthcare operations modules.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Drizzle Kit for migrations
- **Fallback Storage**: In-memory storage for development/testing

## Key Components

### Database Schema
- **Users**: Authentication and user management
- **Claims**: Medical claims processing with status tracking
- **Patients**: Patient information and insurance details
- **Revenue Metrics**: Financial performance tracking
- **Contact Requests**: Lead generation and customer inquiries

### API Endpoints
- `POST /api/contact` - Contact form submissions
- `GET /api/metrics` - Revenue and performance metrics
- `GET /api/claims` - Claims data retrieval
- `GET /api/patients` - Patient information access

### Frontend Pages
- **Home**: Landing page with hero section and key metrics
- **Dashboard**: Main analytics and KPI overview
- **Modules**: Healthcare RCM module catalog
- **Analytics**: Advanced reporting and data visualization
- **Team**: Company information and team profiles
- **Contact**: Lead generation and inquiry form

### UI Components
- Comprehensive component library using Radix UI primitives
- Custom chart components for data visualization
- Responsive navigation and layout components
- Form components with validation support

## Data Flow

1. **User Authentication**: Session-based authentication with PostgreSQL storage
2. **Data Retrieval**: API endpoints serve data from PostgreSQL via Drizzle ORM
3. **State Management**: TanStack Query manages server state and caching
4. **Real-time Updates**: Optimistic updates and background refetching
5. **Error Handling**: Comprehensive error boundaries and user feedback

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI for accessible components
- **Charts**: Recharts for data visualization
- **Validation**: Zod for runtime type validation
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build System**: Vite with TypeScript support
- **Code Quality**: ESLint and TypeScript strict mode
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Hot reload and error overlay

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- In-memory storage fallback for rapid prototyping
- Environment-specific configuration management

### Production Build
- **Frontend**: Static build via Vite to `dist/public`
- **Backend**: Bundled Node.js application via esbuild
- **Database**: PostgreSQL migrations via Drizzle Kit
- **Environment**: Production-ready Express server

### Configuration Requirements
- `DATABASE_URL` environment variable for PostgreSQL connection
- Node.js runtime environment
- Static file serving capability for frontend assets

## Changelog

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.