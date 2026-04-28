# Faraz — Portfolio

A modern, elegant software developer portfolio built with **React + Vite + Tailwind CSS**.

## 🎨 Design
- **Theme**: Light & Minimal with Red + Shiny Gold + Soft Pink accents
- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Features**: Morphing photo border, scroll reveal animations, floating stat cards, shimmer buttons

## 📁 Project Structure
```
faraz-portfolio/
├── public/
│   └── profile.png          ← Your profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

## ✏️ Customizing Your Data

### Personal Info
Edit `src/components/Hero.jsx` and `src/components/About.jsx` to update your name, tagline, and bio.

### Projects
Edit `src/components/Projects.jsx` — update the `featuredProject` and `gridProjects` arrays with your real projects.

### Skills
Edit `src/components/Skills.jsx` — update the `skills` array with your actual tech stack.

### Contact Links
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx` with your real email, GitHub, and LinkedIn.

### Profile Photo
Replace `public/profile.png` with your own photo (keep the same filename, or update the import in `Hero.jsx` and `About.jsx`).

## 🏗️ Build for Production
```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.
