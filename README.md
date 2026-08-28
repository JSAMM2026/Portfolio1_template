# Portfolio1 Template — Modern Developer Showcase

A sleek, responsive, and high-performance portfolio template built for developers, designers, and software engineers. Designed to wow clients and recruiters with modern typography, smooth animations, and a rich dark aesthetic.

## ✨ Features
- **Modern Dark UI**: Carefully crafted dark palette with vibrant teal/cyan accents and subtle neon glows.
- **Dynamic Configuration**: All content (hero, bio, skills, projects, certifications, education, and social links) is driven by a single config file (`src/data/portfolio.js`).
- **Interactive Project Showcase**: Expandable project cards with categorized tags, key features, and deep linking.
- **Skill Matrix**: Organized tech stack badges grouped by category (Frontend, Backend, Cloud & DevOps, Databases, Tools, and Core principles).
- **Smooth Animations**: Built with Framer Motion for scroll reveals, hover interactions, and seamless transitions.
- **Fully Responsive**: Optimized for ultra-wide displays down to mobile phones.
- **Deploy Ready**: Built-in GitHub Pages deployment support (`npm run deploy`).

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS & Modern Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/JSAMM2026/Portfolio1_template.git
cd Portfolio1_template
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

## ⚙️ Customization
Open `src/data/portfolio.js` to update:
- `personalInfo`: Name, titles, summary, location, and social links.
- `skills`: Tech stack categorization and badges.
- `allProjects`: Portfolio project cards, bullet points, and tech stacks.
- `education` & `certifications`: Degrees, schools, and credentials.
- `profile.jpg`: Replace `public/profile.jpg` with your own profile image or avatar.

## 🌐 Deployment to GitHub Pages
To deploy to GitHub Pages:
```bash
npm run deploy
```
