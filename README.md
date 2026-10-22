<div align="center">

# 🎨 UI / UX Knowledge Hub

### Complete Interactive Design & Frontend Engineering Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Platform-7c3aed?style=for-the-badge&logo=google-chrome&logoColor=white)](https://khojayevramzbek-glitch.github.io/ui-ux-hub/)
[![GitHub Release](https://img.shields.io/badge/Release-v2.0.0-10b981?style=for-the-badge)](https://github.com/khojayevramzbek-glitch/ui-ux-hub/releases/tag/v2.0.0)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

<p align="center">
  <b>A comprehensive, modern interactive knowledge hub for mastering the art and science of UI/UX design.</b><br/>
  Featuring live component sandboxes, WCAG accessibility labs, cognitive UX simulators, and production code generators.
</p>

[Explore Live Web App ↗](https://khojayevramzbek-glitch.github.io/ui-ux-hub/) • [Report Bug](https://github.com/khojayevramzbek-glitch/ui-ux-hub/issues) • [Author Portfolio](https://khojayevramzbek-glitch.github.io/portfolio/)

</div>

---

## 🌟 Overview

**UI/UX Hub** is an open-source, interactive web application crafted to bridge the gap between creative visual designers and frontend software engineers. It organizes design laws, accessibility guidelines, industry-standard toolkits, and end-to-end product workflows into an engaging, cohesive experience.

---

## 🚀 Key Modules & Interactive Laboratories

| Module | Highlights & Content |
|---|---|
| 🧪 **Live Component Sandbox** | Real-time interactive playground for Buttons, Cards, Inputs & Badges. Configure corner radius, shadow elevation, and atmospheric glows, then copy the generated React JSX & Tailwind classes. |
| 🛡 **WCAG 2.1 Contrast Checker** | Mathematical relative luminance calculator testing color pairs against WCAG AA & AAA standards. Includes colorblindness simulation filters (Protanopia, Deuteranopia, Tritanopia). |
| 🧠 **Cognitive UX Laws Simulators** | Real-time reaction latency experiments testing Fitts's Law (target size/distance), Hick's Law (choice overload), Miller's Law (7±2 chunking), and Jakob's Law (mental models). |
| 📐 **Figma-to-Tailwind Cheat Sheet** | Instant search engine converting Figma inspector parameters (Auto Layout, radius, drop shadows, opacity) into exact utility classes with 1-click copy. |
| 🏆 **UI/UX IQ Challenge** | Interactive design decision quiz testing intuition on mobile thumb-zones, inline validation timing, destructive defensive flows, and dark mode contrast. |
| 📚 **Fundamental Curriculum** | In-depth breakdown comparing Visual Aesthetics (UI) with User Experience (UX), 8 Core Design Principles, and a 6-Stage Product Lifecycle. |

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
├── public/                   # Static assets & custom UX favicon
├── src/
│   ├── components/
│   │   ├── ui/               # Radix UI + Shadcn primitives
│   │   ├── ComponentPlayground.tsx # Live sandbox & code exporter
│   │   ├── ContrastChecker.tsx     # WCAG 2.1 accessibility lab
│   │   ├── UXLawsSimulator.tsx     # Fitts & Hick reaction experiments
│   │   ├── FigmaToCode.tsx         # Figma to Tailwind search sheet
│   │   ├── UIQuiz.tsx              # Interactive UI/UX assessment challenge
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
