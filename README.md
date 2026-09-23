# Arshwin Sajeevan — Software Developer Portfolio

A production-grade, high-performance personal portfolio and engineering showcase for **Arshwin Sajeevan**, a Software Developer specializing in building scalable web products from interface to production.

[![Live Demo](https://img.shields.io/badge/Live_Demo-arshwin--sajeevan.vercel.app-0284c7?style=for-the-badge&logo=vercel)](https://arshwin-sajeevan.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🚀 Live Application
- **Production URL**: [https://arshwin-sajeevan.vercel.app/](https://arshwin-sajeevan.vercel.app/)
- **Contact Email**: [arshwin619@gmail.com](mailto:arshwin619@gmail.com)
- **LinkedIn**: [linkedin.com/in/arshwin-sajeevan](https://www.linkedin.com/in/arshwin-sajeevan/)
- **GitHub**: [github.com/Arshwinsajeevan](https://github.com/Arshwinsajeevan)

---

## ⚡ Overview & Architectural Highlights

This portfolio is engineered as an **Executive Summary** homepage preview coupled with dedicated deep-dive routes for complete career, skill, project, and case study breakdowns.

- **Real Page Routing**: Clean client-side routing via React Router v7 (`/about`, `/experience`, `/skills`, `/projects`, `/projects/:id`, `/contact`).
- **Deep Technical Case Studies**: Dedicated architectural deep-dives for flagship work including **Infracapitalist** (100+ infrastructure projects, ~500 ms → ~100 ms API tuning on AWS EC2/Nginx/PM2), **Caaalmly**, **CropCare**, **MazhaCar**, **AI Live Chat**, **Rustique**, **NL Image Studio**, and **Scrapy Data Analytics**.
- **Interactive "From Code to Production" Lifecycle**: 8-stage visual pipeline showing end-to-end full-stack workflows from Next.js/React App Router frontend, Git versioning, FastAPI/Node.js REST APIs, PostgreSQL/MySQL schemas, AWS EC2 compute, Linux/Nginx/PM2 daemon management, and live system delivery (with responsive laptop-only terminal inspector).
- **Curated Bento Skills Matrix**: Categorized technical capabilities spanning Frontend, Backend, Databases, DevOps/Deployment, Tools, and Engineering practices with real-time discipline filtering.
- **Mobile-First UX**: Fluid typography scaling, edge-to-edge touch scrolling (`.scrollbar-none`), iOS auto-zoom prevention (16px base form inputs), full-width thumb-friendly tap targets, and smooth drawer navigation.
- **Lenis Virtual Smooth Scrolling**: Studio Freight Lenis v1 engine integrated with React Router page transitions and route top resets.
- **Dark / Light Architectural Theme**: Deep matte obsidian slate dark mode and clean architectural light mode with persistent context state.
- **SEO & Search Indexing**: Automated `sitemap.xml`, `robots.txt`, OpenGraph metadata, and semantic HTML5 hierarchy.

---

## 🛠 Tech Stack

### Core Frontend & UI
- **React 19** — Modern component architecture and hooks
- **Vite 6** — Lightning-fast ES module dev server and Rollup production bundler
- **React Router v7** (`react-router-dom`) — Client-side multi-page routing
- **Tailwind CSS v3** — Design tokens, custom dark palette, responsive utilities
- **Framer Motion** — Smooth micro-animations and stagger transitions
- **Lenis** (`lenis`) — Smooth scroll momentum physics
- **React Icons** — High-performance vector iconography

### Engineering Domain & Capabilities
- **Frontend**: Next.js (App Router, SSR), React.js, TypeScript, JavaScript, TailwindCSS, HTML5, CSS3, Redux, Vite
- **Backend & APIs**: FastAPI, Node.js, Express.js, Python, Django, REST APIs, JWT, Swagger
- **Databases**: PostgreSQL, MySQL, MongoDB, Supabase, SQLite, Prisma
- **Cloud & DevOps**: AWS EC2, Linux (Ubuntu), Nginx (Reverse Proxy & SSL), PM2, Git, GitHub, Vercel, Render

---

## 📁 Project Structure

```text
arshwin-portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt            # Search engine crawling rules
│   └── sitemap.xml           # XML sitemap for SEO discovery
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── About.jsx         # Executive summary bio & milestones
│   │   ├── CodeToProduction.jsx # 8-stage interactive deployment lifecycle
│   │   ├── Contact.jsx       # Direct contact card & email actions
│   │   ├── Education.jsx     # Degrees & certifications
│   │   ├── EngineeringApproach.jsx # Core principles & philosophy
│   │   ├── Experience.jsx    # Career experience cards
│   │   ├── FeaturedWork.jsx  # Flagship products showcase
│   │   ├── Footer.jsx        # Minimal footer & scroll-to-top
│   │   ├── Hero.jsx          # Headline, primary stack & CTAs
│   │   ├── Navbar.jsx        # Navigation, mobile menu & theme toggle
│   │   ├── Projects.jsx      # Curated personal builds preview
│   │   └── ScrollToTop.jsx   # Lenis + route change scroll synchronization
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light mode theme state provider
│   ├── data/
│   │   └── portfolioData.js  # Central verified source of truth
│   ├── pages/                # Dedicated page views
│   │   ├── AboutPage.jsx     # Full biography & career timeline
│   │   ├── ContactPage.jsx   # Working direct message form & coordinates
│   │   ├── ExperiencePage.jsx# In-depth professional experience records
│   │   ├── HomePage.jsx      # Landing view executive summary
│   │   ├── ProjectDetailPage.jsx # Individual technical case study template
│   │   ├── ProjectsPage.jsx  # All professional & personal builds with filters
│   │   └── SkillsPage.jsx    # Bento skills matrix with category tabs
│   ├── App.jsx               # Application root, Lenis init & route map
│   ├── index.css             # Theme variables, typography & Lenis resets
│   └── main.jsx              # React 19 bootstrap
├── index.html                # HTML entry point, SEO meta & Google Fonts
├── tailwind.config.js        # Custom typography, spacing & color tokens
├── vite.config.js            # Rollup manual chunking & build optimization
└── package.json              # Project dependencies & scripts
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Arshwinsajeevan/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled bundle will be generated in the `dist/` directory with optimized vendor chunking.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🎯 Verified Professional Track Record

- **NeoMegaOne LLP** — *Software Development Engineer Intern* (Apr 2026 – Present)
  - Contributed to **Infracapitalist**: Integrated 100+ infrastructure projects, optimized API endpoints reducing query latency from ~500 ms to ~100 ms, managed AWS EC2 instances, and configured Linux Nginx reverse proxies with PM2.
  - Worked on **Caaalmly** frontend development, responsive UI components, Core Web Vitals, and technical SEO.
  - Built internal management views for the **Naval Armament Depot ETMS** and **Pune Municipal Corporation Garden Platform**.

- **VIndia Infrasec** — *Full Stack Intern* (Dec 2024 – Feb 2025)
  - Developed responsive CRM modules and REST APIs using React and Django.
  - Designed and maintained MySQL database schemas and participated in Agile development sprints.

- **Education**:
  - **MCA (Master of Computer Applications)** — Chinmaya Institute of Technology (Kannur University), 76% (2022 – 2024)
  - **B.Sc. Computer Science** — Mahatma Gandhi College (Kannur University) (2019 – 2022)

---

## 📄 License & Attribution

Designed and developed by **Arshwin Sajeevan**.  
All rights reserved © 2026.
