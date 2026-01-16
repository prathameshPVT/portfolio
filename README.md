# Prathamesh Bavkar - Portfolio

A modern, responsive portfolio website built with React.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git

# 2. Navigate to project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm start
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── Prathamesh_Bavkar_Resume.pdf  # Add your resume here!
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── CursorFollower.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── config.js          # ⭐ Edit this for easy customization
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Configuration

Edit `src/config.js` to customize:

```javascript
const config = {
  // Toggle job search status
  OPEN_TO_WORK: false,  // Change to true when looking for opportunities
  
  // Your resume file (place in public folder)
  RESUME_URL: "/Prathamesh_Bavkar_Resume.pdf",
  
  // Personal info
  NAME: "Prathamesh",
  EMAIL: "bavkarp4@gmail.com",
  PHONE: "+918779742308",
  LINKEDIN: "https://www.linkedin.com/in/prathameshbavkar811",
  
  // ... more options
};
```

## 📄 Adding Your Resume

1. Place your PDF resume in the `public/` folder
2. Name it `Prathamesh_Bavkar_Resume.pdf` (or update `RESUME_URL` in config)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

## 🚀 Deployment Options

### GitHub Pages
```bash
npm install gh-pages --save-dev
```
Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run:
```bash
npm run deploy
```

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy automatically!

### Netlify
1. Push to GitHub
2. Go to netlify.com
3. Connect your repository
4. Deploy!

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #00ff88;    /* Green accent */
  --accent-secondary: #00d4ff;  /* Blue accent */
  --accent-tertiary: #ff6b35;   /* Orange accent */
  --bg-primary: #0a0a0b;        /* Main background */
}
```

### Fonts
The site uses:
- **Syne** - Display/headings
- **Space Mono** - Body text

Change in `public/index.html` Google Fonts link.

## 📱 Features

- ✅ Fully responsive (mobile-friendly)
- ✅ Dark theme
- ✅ Smooth animations
- ✅ Custom cursor effect (desktop)
- ✅ Resume download
- ✅ "Open to Work" toggle
- ✅ SEO optimized

## 📝 License

MIT License - feel free to use this template!

---

Built with ❤️ by Prathamesh Bavkar
