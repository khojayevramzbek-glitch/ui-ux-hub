<div align="center">

# 🎨 UI / UX Knowledge Hub

### Complete Interactive Design & Frontend Engineering Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Platform-7c3aed?style=for-the-badge&logo=google-chrome&logoColor=white)](https://khojayevramzbek-glitch.github.io/ui-ux-hub/)
[![GitHub Release](https://img.shields.io/badge/Release-v1.0.0-10b981?style=for-the-badge)](https://github.com/khojayevramzbek-glitch/ui-ux-hub/releases/tag/v1.0.0)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

<p align="center">
  <b>A comprehensive, modern interactive knowledge hub for mastering the art and science of UI/UX design.</b><br/>
  From fundamental human-computer interaction theory to pixel-perfect production code.
</p>

[Explore Live Web App ↗](https://khojayevramzbek-glitch.github.io/ui-ux-hub/) • [Report Bug](https://github.com/khojayevramzbek-glitch/ui-ux-hub/issues) • [Author Portfolio](https://khojayevramzbek-glitch.github.io/portfolio/)

</div>

---

## 🌟 Overview

**UI/UX Hub** is an open-source, interactive web application crafted to bridge the gap between creative visual designers and frontend software engineers. It organizes design laws, accessibility guidelines, industry-standard toolkits, and end-to-end product workflows into an engaging, cohesive experience.

---

## 🚀 Key Modules & Features

| Module | Highlights & Content |
|---|---|
| 🧠 **What is UI vs UX?** | In-depth breakdown comparing Visual Aesthetics (UI) with User Psychology, Usability & Satisfaction (UX). |
| 📐 **Core Design Principles** | 8 foundational rules: *Visual Hierarchy, Consistency, Accessibility (a11y), Feedback, Contrast, Usability, Gestalt Laws*. |
| 🛠 **Interactive Toolkit** | Categorized overview of industry tools across Design (*Figma, Adobe XD, Sketch*), Frontend Code (*React, Tailwind CSS, Vite*), Testing & Collaboration. |
| 🔄 **The 6-Stage UX Process** | Step-by-step roadmap: `01 Research` ➔ `02 Wireframing` ➔ `03 Visual Design` ➔ `04 Prototyping` ➔ `05 Testing` ➔ `06 Launch & Handoff`. |
| 📚 **Curated Resources** | Handpicked design books (*Don't Make Me Think, The Design of Everyday Things, Refactoring UI*), top certification courses, and design systems. |
| 📱 **Mobile & Dark First** | Fully responsive layout with fluid glassmorphism, floating blur orbs, micro-interactions, and accessibility support. |

---

## 🛠 Tech Stack & Architecture

- **Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/) (SWC compiler for ultra-fast HMR)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography` + `tailwindcss-animate`
- **UI Components:** [Radix UI](https://www.radix-ui.com/) Primitives & [Shadcn UI](https://ui.shadcn.com/) Architecture
- **Icons:** [Lucide React](https://lucide.dev/)
- **State & Data:** [@tanstack/react-query](https://tanstack.com/query), `react-hook-form`, `zod`
- **Interactions:** `embla-carousel-react`, `recharts`, `sonner`, `vaul` drawer
- **Routing:** `react-router-dom` (HashRouter for flawless static GitHub Pages hosting)

---

## 💻 Local Setup & Installation

Clone and run the application locally in seconds:

```bash
# 1. Clone the repository
git clone https://github.com/khojayevramzbek-glitch/ui-ux-hub.git

# 2. Enter project folder
cd ui-ux-hub

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:8080` in your browser.

To create a production build:
```bash
npm run build
```

---

## 📁 Project Structure

```text
ui-ux-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD
├── public/                   # Static assets & icons
├── src/
│   ├── components/
│   │   ├── ui/               # Radix UI + Shadcn primitives
│   │   ├── HeroSection.tsx   # Landing hero with animated gradient orbs
│   │   ├── WhatIsUIUX.tsx    # Interactive comparison module
│   │   ├── PrinciplesSection.tsx # 8 Fundamental UX laws
│   │   ├── ToolsSection.tsx  # Categorized tools tabview
│   │   ├── ProcessSection.tsx# 6-step lifecycle roadmap
│   │   ├── ResourcesSection.tsx # Books & course library
│   │   ├── Navigation.tsx    # Responsive navbar
│   │   └── Footer.tsx        # Footer & links
│   ├── pages/
│   │   ├── Index.tsx         # Main single-page application
│   │   └── NotFound.tsx      # 404 page
│   ├── App.tsx               # Providers & HashRouter
│   └── main.tsx              # DOM mounting point
├── components.json           # Shadcn configuration
├── tailwind.config.ts        # Design tokens & color system
├── vite.config.ts            # Vite bundler & alias settings
└── package.json              # Dependencies & npm scripts
```

---

## 👤 Author & Connect

**Ramzbek Khojayev**
- 🌐 **Live Portfolio:** [khojayevramzbek-glitch.github.io/portfolio](https://khojayevramzbek-glitch.github.io/portfolio/)
- 💬 **Telegram:** [@khojayev_ramz](https://t.me/khojayev_ramz)
- 💼 **LinkedIn:** [Ramzbek Khojayev](https://www.linkedin.com/in/ramzbek-khojayev-2443ab426/)
- 🐙 **GitHub:** [@khojayevramzbek-glitch](https://github.com/khojayevramzbek-glitch)

<div align="center">
  <sub>Crafted with passion in <b>Khorezm, Uzbekistan 🇺🇿</b> • Open to innovative frontend & UI/UX collaborations</sub>
</div>
