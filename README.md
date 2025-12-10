# 🎁 GoToGifty

> A modern, premium digital gift card management platform built with React, TypeScript, and Tailwind CSS.

![GoToGifty](https://img.shields.io/badge/GoToGifty-Digital%20Gift%20Cards-gradient?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Statistics](#project-statistics)
- [Routes & Pages](#routes--pages)
- [Components](#components)
- [Design System](#design-system)
- [Getting Started](#getting-started)

---

## 🎯 Overview

GoToGifty is a comprehensive digital gift card ecosystem that connects **Stores**, **Networks**, and **Customers** through a seamless platform. The application supports four distinct user roles, each with dedicated interfaces optimized for their specific needs.

### User Roles

| Role | Description | Interface |
|------|-------------|-----------|
| **End User/Customer** | Browse stores, purchase and manage gift cards | Public pages + User Dashboard |
| **Store Admin** | Manage store, POS terminal, transactions, offers | Store Admin Dashboard + Smart Terminal |
| **Network Admin** | Oversee network stores, admins, settlements | Network Admin Dashboard |
| **Super Admin** | Global platform management | Super Admin Dashboard |

---

## ✨ Features

### Core Features
- 🎴 **Digital Gift Card Management** - Purchase, store, share, and redeem gift cards
- 🏪 **Store & Network Discovery** - Browse and filter stores by location and network
- 💳 **Smart Terminal POS** - Cashier-optimized interface for card operations
- 🔄 **Card Transfer & Sharing** - Temporary access or permanent ownership transfer
- 📊 **Real-time Analytics** - Dashboard metrics and transaction tracking
- 🌓 **Dark/Light Mode** - Persistent theme preference
- 📱 **Responsive Design** - Mobile-first, works on all devices

### Security Features
- 🔐 OTP Verification for sensitive operations
- 🔒 Multi-level card security settings
- 📋 Activity logging and audit trails

### Admin Features
- 📈 Bill Book & Settlement tracking
- 👥 User and Admin management
- 🎁 Offers and Plans configuration
- ✅ Store approval workflow

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.x | Type Safety |
| Vite | 5.x | Build Tool |
| React Router | 6.30.1 | Routing |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| Tailwind CSS | Utility-first CSS |
| Shadcn/ui | Component Library |
| Radix UI | Accessible Primitives |
| Lucide React | Icon System |
| class-variance-authority | Component Variants |

### State & Data
| Technology | Purpose |
|------------|---------|
| TanStack React Query | Server State Management |
| React Hook Form | Form Management |
| Zod | Schema Validation |

### Additional Libraries
| Library | Purpose |
|---------|---------|
| Recharts | Data Visualization |
| date-fns | Date Utilities |
| Sonner | Toast Notifications |
| next-themes | Theme Management |
| embla-carousel-react | Carousel Component |
| input-otp | OTP Input Component |
| vaul | Drawer Component |

---

## 📊 Project Statistics

```
┌─────────────────────────────────────────┐
│           GoToGifty Stats               │
├─────────────────────────────────────────┤
│  Total Routes:          47              │
│  Public Pages:          12              │
│  User Dashboard Pages:   7              │
│  Super Admin Pages:      9              │
│  Network Admin Pages:    8              │
│  Store Admin Pages:      8              │
│  Not Found Page:         1              │
├─────────────────────────────────────────┤
│  Modal Components:       6              │
│  Card Components:        3              │
│  Layout Components:      4              │
│  UI Components:         50+             │
│  Custom Hooks:           3              │
└─────────────────────────────────────────┘
```

---

## 🗺 Routes & Pages

### Public Routes (12)

| Route | Page | Description |
|-------|------|-------------|
| `/` | Index | Landing page with hero, features, and store highlights |
| `/stores` | Stores | Store listing with search and filters |
| `/stores/:id` | StoreDetail | Store info, plans, offers, and card purchase |
| `/networks` | Networks | Network listing with search |
| `/networks/:id` | NetworkDetail | Network info and participating stores |
| `/how-it-works` | HowItWorks | 4-step guide for new users |
| `/login` | Login | User authentication |
| `/signup` | Signup | New user registration |
| `/forgot-password` | ForgotPassword | Password reset request |
| `/claim/:token` | ClaimInvitation | Gift card claim for recipients |
| `/terms` | Terms | Terms of Service |
| `/privacy` | Privacy | Privacy Policy |
| `/support` | Support | Help and support page |

### User Dashboard Routes (7)

| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Dashboard | Wallet overview, cards, recent activity |
| `/dashboard/cards` | AllCards | Full grid of all user's gift cards |
| `/dashboard/transactions` | AllTransactions | Complete transaction history with filters |
| `/card/:id` | CardDetail | Card details, QR code, actions, history |
| `/profile` | Profile | User profile management |
| `/notifications` | Notifications | Notification center |
| `/settings` | Settings | App preferences, theme, security |

### Super Admin Routes (9)

| Route | Page | Description |
|-------|------|-------------|
| `/admin` | SuperAdminDashboard | Global metrics and platform overview |
| `/admin/networks` | AdminNetworks | Manage all networks |
| `/admin/stores` | AdminStores | Manage all stores |
| `/admin/users` | AdminUsers | User management |
| `/admin/transactions` | AdminTransactions | All platform transactions |
| `/admin/billbook` | DetailedBillBook | Comprehensive settlement details |
| `/admin/settlements` | AdminSettlements | Settlement processing |
| `/admin/settings` | AdminSettings | Platform configuration |
| `/admin/logs` | AdminLogs | Activity timeline logs |

### Network Admin Routes (8)

| Route | Page | Description |
|-------|------|-------------|
| `/network-admin` | NetworkAdminDashboard | Network metrics and overview |
| `/network-admin/profile` | NetworkProfile | Network profile settings |
| `/network-admin/stores` | NetworkStores | Network's store management |
| `/network-admin/offers` | NetworkOffers | Network-wide offers |
| `/network-admin/billbook` | NetworkBillBook | Network settlement tracking |
| `/network-admin/admins` | NetworkAdmins | Network admin management |
| `/network-admin/logs` | NetworkLogs | Network activity logs |
| `/network-admin/approvals` | StoreApprovals | Pending store approvals |

### Store Admin Routes (8)

| Route | Page | Description |
|-------|------|-------------|
| `/store-admin` | StoreAdminDashboard | Store metrics and overview |
| `/store-admin/profile` | StoreProfile | Store profile settings |
| `/store-admin/plans` | StorePlans | Gift card plan management |
| `/store-admin/terminal` | SmartTerminal | Full-screen POS interface |
| `/store-admin/transactions` | StoreTransactions | Store transaction history |
| `/store-admin/billbook` | StoreBillBook | Store settlement tracking |
| `/store-admin/offers` | StoreOffers | Store-specific offers |
| `/store-admin/logs` | StoreLogs | Store activity logs |

### Utility Routes (1)

| Route | Page | Description |
|-------|------|-------------|
| `*` | NotFound | 404 error page |

---

## 🧩 Components

### Layout Components

| Component | Location | Description |
|-----------|----------|-------------|
| PublicLayout | `layout/PublicLayout.tsx` | Wrapper for public pages |
| PublicNavbar | `layout/PublicNavbar.tsx` | Top navigation bar |
| AdminLayout | `layout/AdminLayout.tsx` | Sidebar layout for admin pages |
| Footer | `layout/Footer.tsx` | Site footer |

### Card Components

| Component | Location | Description |
|-----------|----------|-------------|
| GiftCardPreview | `cards/GiftCardPreview.tsx` | Gift card display with gradient |
| StoreCard | `cards/StoreCard.tsx` | Store listing card |
| NetworkCard | `cards/NetworkCard.tsx` | Network listing card |

### Modal Components

| Component | Location | Description |
|-----------|----------|-------------|
| OTPModal | `modals/OTPModal.tsx` | OTP verification overlay |
| GiftCardModal | `modals/GiftCardModal.tsx` | Send gift card to new user |
| ShareAccessModal | `modals/ShareAccessModal.tsx` | Temporary card access sharing |
| TransferCardModal | `modals/TransferCardModal.tsx` | Permanent card transfer |
| AddStoreModal | `modals/AddStoreModal.tsx` | Store creation form |
| AddNetworkModal | `modals/AddNetworkModal.tsx` | Network creation form |

### Feature Components

| Component | Location | Description |
|-----------|----------|-------------|
| ProfileDropdown | `ProfileDropdown.tsx` | User menu with theme toggle |
| StoreSwitcher | `StoreSwitcher.tsx` | Multi-store selection dropdown |
| ActivityTimeline | `ActivityTimeline.tsx` | Timeline-style activity log |
| QRScanOverlay | `QRScanOverlay.tsx` | QR scanner UI overlay |
| NavLink | `NavLink.tsx` | Active-state navigation link |

### Custom Hooks

| Hook | Location | Description |
|------|----------|-------------|
| useTheme | `hooks/useTheme.tsx` | Theme state and toggle |
| useToast | `hooks/use-toast.ts` | Toast notification trigger |
| useMobile | `hooks/use-mobile.tsx` | Mobile breakpoint detection |

---

## 🎨 Design System

### Brand Colors

```css
/* Primary Palette */
--primary: Navy/Charcoal (#111827 - #1F2933)
--accent: Teal highlight for CTAs
--gradient: Orange → Pink → Magenta (gift card backgrounds)

/* Semantic Colors */
--background: Light grey/white (user) or dark (admin)
--foreground: Primary text color
--muted: Secondary/subdued elements
--destructive: Error/danger states
```

### Typography

- **Font Family**: Clean sans-serif (Inter-like)
- **Headings**: Bold, clear hierarchy
- **Body**: Regular weight, optimal line height

### Design Principles

- ✨ Rounded corners on cards and buttons
- 🌫 Subtle shadows and glassmorphism effects
- 🎭 Smooth hover states and transitions
- 📱 Mobile-first responsive design
- ♿ Accessible color contrast ratios

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gotogifty

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Environment Variables

Currently, the application runs with mock data. When connecting to a backend:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets (logo, images)
├── components/
│   ├── cards/           # Card display components
│   ├── layout/          # Layout wrappers
│   ├── modals/          # Modal dialogs
│   └── ui/              # Shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/
│   └── admin/           # Admin dashboard pages
├── App.tsx              # Root component with routes
├── main.tsx             # Application entry point
└── index.css            # Global styles & design tokens
```

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 🤝 Contributing

Please contact the project maintainers for contribution guidelines.

---

<div align="center">
  <strong>Built with ❤️ using Lovable</strong>
</div>
