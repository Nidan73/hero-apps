# 🚀 HERO.IO — Productive Apps Platform

HERO.IO is a modern, responsive web application that showcases a collection of productive apps built by our team. The platform allows users to explore apps, view detailed statistics and reviews, install apps locally, and manage their installed applications — all with a smooth, user-friendly experience.

This project focuses on clean UI design, efficient state management, and real-world features such as search, sorting, charts, and persistent local storage.

---

## 🌐 Live Demo

🔗 **Live Website:**  
https://hero-apps.vercel.app  

🔗 **GitHub Repository:**  
https://github.com/Nidan73/hero-apps

---

## ✨ Features Overview

### 🧭 Global Layout
- Fully responsive design for mobile, tablet, and desktop
- Custom **Header** with:
  - Clickable logo (redirects to Home)
  - Navigation links: Home, Apps, Installation (with active route indication)
  - “Contribute” button linked to GitHub profile
- Custom **Footer** with branding and social links

---

### 🏠 Home Page
- Center-aligned hero banner with heading, description, and call-to-action buttons
  - Google Play
  - App Store
- Statistics section displaying:
  - Total Downloads
  - Total Reviews
  - Active Apps
- Top Apps section:
  - Displays featured apps in a grid layout
  - Each card shows app image, title, download count, and rating
  - “Show All” button navigates to the All Apps page

---

### 📱 All Apps Page
- Displays all available apps from JSON data
- Live search functionality:
  - Case-insensitive search
  - Filters apps by title while typing
  - Displays “No App Found” when no matches exist
- Shows total number of apps
- Clicking an app navigates to the App Details page

---

### 📊 App Details Page
- Detailed app information:
  - App image
  - Title, rating, downloads, and reviews
- Install feature:
  - Install button becomes disabled after installation
  - Button text changes to **Installed**
  - Success toast notification shown
- Review analytics:
  - Responsive chart built with **Recharts**
- App description section following the design layout
- Handles invalid app IDs with a proper “App Not Found” message

---

### 💾 My Installation Page
- Displays all installed apps using **localStorage**
- Installed apps persist after page reload
- Uninstall feature:
  - Removes app from UI and localStorage
  - Displays a toast notification
- Sorting options:
  - Downloads: High → Low
  - Downloads: Low → High

---

### ⏳ Loading & Error Handling
- Loading animation shown during:
  - Page navigation
  - Search operations
- Custom error page for invalid routes
- Safe route reloads after deployment (no 404 issues)

---

## 🧠 Data Design

App data is maintained using a structured JSON format containing:
- App image, title, and company name
- Description and size
- Download and review counts
- Average rating
- Rating breakdown (1★ to 5★)

This structure allows scalability and future backend integration.

---

## 🛠️ Technologies Used

- **React**
- **React Router**
- **Tailwind CSS**
- **DaisyUI**
- **Recharts**
- **LocalStorage**
- **Vite**
- **Netlify**

---

## 📦 Installation & Setup

```bash
git clone https://github.com/Nidan73/hero-apps.git
cd hero-apps
npm install
npm run dev
