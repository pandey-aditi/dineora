# 🍽️ Dineora — Restaurant Discovery & Table Reservation Platform

A modern restaurant discovery and table reservation web application designed to help users discover curated dining experiences, explore restaurants, check table availability, and reserve their preferred dining slots.

Built with React, TypeScript, Vite, Tailwind CSS, React Router, and a premium luxury-inspired UI focused on creating a seamless restaurant discovery and reservation experience.

🌐 **Live Demo:** https://dineora-iota.vercel.app

---

## 📌 Project Overview

Dineora is a modern restaurant discovery and table reservation platform that brings restaurants, dining experiences, and reservations together in one elegant interface.

The platform allows users to:

* Discover curated restaurants
* Search restaurants by name and location
* Filter restaurants by cuisine, price, and rating
* Explore detailed restaurant profiles
* View chef and cuisine information
* Check restaurant availability
* Select reservation dates
* Choose number of guests
* Select available dining slots
* Complete a reservation workflow
* Access personalized dashboard experiences

Dineora focuses on combining modern web technology with a premium hospitality-inspired design to provide a polished restaurant booking experience.

---

## 🎯 Objectives

* Create a premium restaurant discovery experience
* Simplify restaurant search and discovery
* Provide an intuitive table reservation workflow
* Display restaurant information clearly
* Provide available dining slots to users
* Implement protected user experiences
* Implement reusable React components
* Build a responsive web application
* Demonstrate modern frontend development practices
* Deploy the application to a production environment

---

## ✨ Features

### 🔍 Restaurant Discovery

* Search restaurants by name
* Search restaurants by location
* Browse restaurants by cuisine
* Filter restaurants by price
* Filter restaurants by rating
* Trending restaurants section
* Curated restaurant listings
* Restaurant cards with quick reservation actions
* Restaurant detail pages
* Responsive restaurant discovery interface

### 🍽️ Restaurant Details

* Cinematic restaurant hero section
* Restaurant name and branding
* Cuisine information
* Chef information
* Restaurant description
* Restaurant address
* Opening hours
* Rating information
* Review information
* Pricing information
* Exclusive restaurant indicators
* Guest experiences and reviews

### 📅 Table Reservation

* Select reservation date
* Select number of guests
* Display available dining slots
* Select preferred time slot
* Reservation validation
* Authentication check before booking
* Guest information form
* Special occasion selection
* Special requests and dietary notes
* Booking summary
* Booking confirmation workflow

### 👤 User Experience

* User sign in
* User registration
* Logout functionality
* Persistent authentication state
* Protected routes
* User dashboard
* Reservation workflow
* Booking confirmation experience
* Responsive navigation
* Mobile navigation menu

### 🛡️ Access Control

* Protected routes
* Authentication-based access
* Role-based access handling
* User role support
* Owner role support
* Admin role support
* Access denied handling

### 🏛️ Management Interfaces

* Restaurant owner dashboard
* Admin dashboard
* Restaurant management interface
* Administrative management interface
* Role-specific protected pages

### 🎨 UI / UX

* Premium luxury restaurant aesthetic
* Editorial-inspired typography
* Black, ivory and warm gold color palette
* Cinematic restaurant imagery
* Modern responsive navigation
* Premium restaurant cards
* Smooth hover interactions
* Subtle animations and transitions
* Toast notifications
* Loading states
* Responsive layouts
* Premium reservation widgets
* Mobile-friendly interface

---

## 🛠 Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Lucide React
* React Hot Toast

### State Management

* React Context API
* React Hooks
* Local Storage

### Development Tools

* Vite
* ESLint
* Git
* GitHub
* VS Code

### Deployment

* Vercel

---

## 🏗 System Architecture

    User
      │
      ▼
    React Frontend
      │
      ├── Restaurant Discovery
      │
      ├── Search & Filtering
      │
      ├── Authentication
      │
      ├── Restaurant Details
      │
      └── Reservation Workflow
              │
              ▼
        Protected Routes
              │
              ▼
           Vercel
          Production

---

## 📂 Project Structure

    Dineora/

    ├── public/
    │
    ├── src/
    │   │
    │   ├── assets/
    │   │   └── assets.ts
    │   │
    │   ├── components/
    │   │   ├── admin/
    │   │   │
    │   │   ├── booking/
    │   │   │   ├── BookingForm.tsx
    │   │   │   ├── BookingSuccess.tsx
    │   │   │   └── BookingSummary.tsx
    │   │   │
    │   │   ├── home/
    │   │   │   ├── Hero.tsx
    │   │   │   ├── CuisineBrowse.tsx
    │   │   │   ├── MembershipSection.tsx
    │   │   │   ├── NewsletterCTA.tsx
    │   │   │   └── TrendingRow.tsx
    │   │   │
    │   │   ├── owner/
    │   │   │
    │   │   ├── restaurant/
    │   │   │   ├── BookingWidget.tsx
    │   │   │   ├── RestaurantHero.tsx
    │   │   │   ├── RestaurantInfo.tsx
    │   │   │   └── RestaurantReviews.tsx
    │   │   │
    │   │   ├── AuthModal.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Loader.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── ProtectedRoute.tsx
    │   │   └── RestaurantCard.tsx
    │   │
    │   ├── context/
    │   │   └── AppContext.tsx
    │   │
    │   ├── pages/
    │   │   ├── Home.tsx
    │   │   ├── Search.tsx
    │   │   ├── RestaurantDetail.tsx
    │   │   ├── BookingConfirmation.tsx
    │   │   ├── Dashboard.tsx
    │   │   ├── admin/
    │   │   └── owner/
    │   │
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    │
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── vercel.json

---

## 🗄 Application Data

The current version uses locally defined demo restaurant and availability data to demonstrate the complete restaurant discovery and reservation experience.

### Restaurant Data

    {
      _id,
      name,
      slug,
      cuisine,
      chef,
      description,
      address,
      price,
      rating,
      reviews,
      image,
      exclusive
    }

### Availability Data

    {
      restaurant,
      date,
      time,
      availableSeats
    }

### User Data

    {
      name,
      email,
      role
    }

---

## 🔄 Application Workflow

    Home
      ↓
    Restaurant Search
      ↓
    Search / Filtering
      ↓
    Restaurant Details
      ↓
    Select Date
      ↓
    Select Guests
      ↓
    Available Time Slots
      ↓
    Select Time
      ↓
    Authentication Check
      ↓
    Guest Details
      ↓
    Booking Confirmation

---

## 🔐 Authentication & Authorization

The current version implements frontend authentication for demonstration purposes.

Authentication state is managed through React Context and browser local storage.

### Authentication Features

* Sign In
* Sign Up
* Logout
* Persistent authentication state
* Protected routes
* Role-based access handling

### Supported Roles

    User
      ├── Browse Restaurants
      ├── Search Restaurants
      ├── Make Reservations
      └── Access Dashboard

    Owner
      └── Access Owner Dashboard

    Admin
      └── Access Admin Dashboard

> **Note:** This version is a frontend-focused implementation and does not currently include a production backend, real database authentication, or server-side authorization. Authentication and application data are simulated on the frontend for demonstration purposes.

---

## 📌 Key Pages

| Page | Description |
|------|-------------|
| Home | Premium restaurant discovery landing page |
| Search | Restaurant search and filtering |
| Restaurant Details | Restaurant information and reservation interface |
| Booking | Guest information and reservation workflow |
| Booking Confirmation | Reservation confirmation experience |
| Dashboard | User dashboard and booking experience |
| Owner Dashboard | Restaurant management interface |
| Admin Dashboard | Administrative management interface |

---

## 🔍 Search & Filtering

Dineora provides multiple discovery options to help users find restaurants based on their preferences.

### Search Options

* Restaurant name
* Location

### Filters

* Cuisine
* Price
* Rating

### Cuisine Categories

* Italian
* Japanese
* Indian
* French
* Mexican
* Mediterranean

---

## 📅 Reservation Flow

The reservation experience allows users to:

1. Open a restaurant
2. Select a dining date
3. Choose the number of guests
4. View available time slots
5. Select a preferred time
6. Authenticate if required
7. Enter guest details
8. Select special occasion
9. Add special requests
10. Confirm the reservation

---

## 🎨 Design System

Dineora follows a luxury hospitality-inspired visual identity.

### Color Direction

    Primary:
    Black / Espresso

    Secondary:
    Warm Gold

    Surface:
    Warm Ivory / Neutral

    Typography:
    Editorial Serif + Clean Sans Serif

### Design Characteristics

* Premium spacing
* Large editorial typography
* Cinematic imagery
* Minimal navigation
* Soft borders
* Rounded cards
* Subtle shadows
* Warm gold accents
* Smooth hover transitions
* Responsive layouts

---

## ⚙ Installation

### Prerequisites

* Node.js
* npm
* Git
* VS Code

### Clone Repository

    git clone https://github.com/pandey-aditi/dineora.git

    cd dineora

### Install Dependencies

    npm install

### Start Development Server

    npm run dev

The application will run on:

    http://localhost:5173

---

## 🏭 Production Build

Create an optimized production build:

    npm run build

Preview the production build locally:

    npm run preview

---

## 🌐 Application URLs

### 🚀 Live Application

https://dineora-iota.vercel.app

### 💻 Local Development

    Home:
    http://localhost:5173/

    Search:
    http://localhost:5173/search

    Restaurant Details:
    http://localhost:5173/restaurant/:slug

    Dashboard:
    http://localhost:5173/dashboard

    Booking:
    http://localhost:5173/booking/:slug

---

## ☁️ Deployment

Dineora is deployed using Vercel with the source code hosted on GitHub.

### Production Architecture

    GitHub
       │
       ▼
    Main Branch
       │
       ▼
    Vercel
       │
       ▼
    Production Build
       │
       ▼
    Dineora

### Deployment Stack

* Source Code: GitHub
* Hosting: Vercel
* Build Tool: Vite
* Application: React + TypeScript

### Production URL

https://dineora-iota.vercel.app

---

## 📸 Screenshots

### Home Page

* Premium restaurant discovery experience
* Cinematic hero section
* Restaurant search interface
* Cuisine browsing section
* Trending restaurants
* Premium hospitality-inspired design

### Search Page

* Restaurant listings
* Search functionality
* Cuisine filtering
* Price information
* Rating information
* Quick reservation actions

### Restaurant Details

* Cinematic restaurant hero
* Restaurant information
* Chef information
* Cuisine information
* Guest experiences
* Restaurant location
* Availability widget
* Reservation interface

### Booking Flow

* Date selection
* Guest selection
* Available time slots
* Guest information
* Special requests
* Booking confirmation

### Dashboard

* User-specific experience
* Protected access
* Reservation information
* Booking workflow

---

## 🚀 Deployment Workflow

    Development
         │
         ▼
       VS Code
         │
         ▼
    npm run build
         │
         ▼
        Git
         │
         ▼
      GitHub
         │
         ▼
      Vercel
         │
         ▼
    Production

---

## 💡 Learning Outcomes

This project demonstrates practical experience with:

* React development
* TypeScript
* React component architecture
* Reusable components
* React Hooks
* React Context API
* Client-side routing
* Protected routes
* Role-based access handling
* Form handling
* State management
* Local storage
* Responsive UI development
* Tailwind CSS
* Search and filtering
* Reservation workflow design
* UI/UX design
* Git and GitHub
* Vite production builds
* Vercel deployment

---

## 🔮 Future Enhancements

The current frontend architecture can be extended into a complete production-ready restaurant reservation platform.

Planned enhancements include:

* Node.js / Express backend
* MongoDB database integration
* REST API integration
* JWT authentication
* Secure password hashing
* Real user accounts
* Persistent restaurant data
* Real-time table availability
* Persistent reservations
* Restaurant owner management
* Admin approval workflows
* Payment gateway integration
* Email booking confirmations
* Restaurant analytics
* Image upload and cloud storage
* Real-time notifications
* Google Maps integration
* Advanced restaurant recommendations
* AI-powered restaurant recommendations
* Personalized dining suggestions

---

## 🎯 Project Goals

Dineora was developed with the following goals:

* Build a visually premium restaurant platform
* Demonstrate modern React and TypeScript development
* Implement reusable and scalable components
* Create a complete restaurant discovery experience
* Implement an intuitive reservation workflow
* Practice protected routes and role-based access
* Build responsive interfaces
* Deploy a production frontend application

---

## 👩‍💻 Author

**Aditi Pandey**

🎓 Computer Science Engineering

🔗 **GitHub:** https://github.com/pandey-aditi

🌐 **Live Demo:** https://dineora-iota.vercel.app

### Areas of Interest

* Full Stack Development
* Software Engineering
* Generative AI
* Modern Web Applications

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for educational and portfolio purposes.
