# CodeCircle Developer Portfolio

## Overview

A modern, visual portfolio built with React and TypeScript. Features smooth animations, typewriter effects, filterable project showcase, and a functional contact form. Designed with a dark theme featuring purple/blue accents following contemporary tech portfolio aesthetics To be integrated into main-portfolio-site.

## Features

- **Hero Section**: Animated typewriter effect on headline, gradient text, smooth scroll navigation
- **About Me**: Developer profile with animated code snippet display in card format
- **Projects**: Filterable project cards (All, Corporate, E-commerce, Dashboards, Portfolio) with hover effects and technology badges
- **Skills**: Categorized technical skills (Frontend, Backend, Tools) with icons
- **Contact**: Working form with validation and contact information cards
- **Design**: Dark theme, purple/blue accents, smooth animations, responsive mobile-first design

## Project Structure

- `/client/src/pages/home.tsx` - Main portfolio page with all sections
- `/client/src/pages/project-detail.tsx` - Detailed project view page
- `/shared/schema.ts` - TypeScript schemas for contact form and project data
- `/shared/projects.ts` - Centralized project data for use across pages
- `/server/email.ts` - Email service for contact form submissions

## Technology Stack

### Frontend

- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- React Hook Form with Zod validation
- TanStack Query for data fetching
- Theme provider with dark/light mode support
- Lucide React icons

### Backend

- Express.js with TypeScript
- In-memory storage for contact submissions
- Nodemailer for email integration
- Zod validation

## Email Configuration 

To enable email notifications for contact form submissions, need to set these environment variables:

- `SMTP_HOST` - SMTP server hostname (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP port (default: 587)
- `SMTP_SECURE` - Use TLS (true/false, default: false)
- `SMTP_USER` - SMTP username/email
- `SMTP_PASS` - SMTP password/app password
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email address for contact form submissions

If not configured, contact submissions will still be stored but emails won't be sent.

## User Preferences

- Dark/light theme toggle with localStorage persistence
- Purple/blue accent colors (#8b5cf6, #3b82f6)
- Clean, modern aesthetic with smooth animations
- Mobile-first responsive design
- Emphasis on visual polish and professional presentation
