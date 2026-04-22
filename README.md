# Portfolio Website

> Personal portfolio site built in React and Vite — showcasing data analytics and front-end development projects with live links and GitHub integration.

**Live site:** [sarahhalverson.dev](https://sarahhalverson.dev) *(coming soon)*

---

## 📋 Overview

My personal portfolio site — built from scratch in React as both a professional showcase and a hands-on learning project. The site presents my work, skills, and background in a clean, modern interface designed to give recruiters and hiring managers everything they need at a glance.

Every section was designed and coded by me. No templates.

---

## ✨ Features

- **Hero section** — name, title, one-line bio, and direct links to resume and projects
- **Skills section** — visual tech stack grid with icons for front-end, data, and tools
- **Projects section** — project cards with descriptions, tech tags, GitHub links, and live demo links
- **About section** — background, education, and what I'm currently building
- **Contact section** — direct links to LinkedIn, GitHub, and email
- **Fully responsive** — works cleanly on desktop, tablet, and mobile
- **Fast load** — built with Vite for near-instant build times and optimized output

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| JavaScript (ES6+) | Logic and interactivity |
| Vercel | Deployment and hosting |

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/sarahmhalverson/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js     # Project data array
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🌐 Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

```bash
# Deploy manually
npm run build
vercel --prod
```

---

## 👩‍💻 Built By

**Sarah Halverson** — sole developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/sarahmhalverson)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:sarahmhalve@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://sarahhalverson.dev)
