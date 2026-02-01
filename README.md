# Modern Developer Portfolio

A stunning, professional developer portfolio built with modern web technologies, featuring dynamic GitHub integration, 3D effects, and smooth animations.

## 🚀 Live Demo

[View Live Demo](https://port-liart-three.vercel.app/)

## ✨ Features

### Core Features
- **Dynamic GitHub Integration**: Automatically fetches and displays all public repositories from GitHub account
- **Modern Dark Theme**: Professional dark mode design with glassmorphism effects
- **3D Background**: Interactive Three.js starfield background
- **Smooth Animations**: GSAP and Framer Motion for rich transitions and scroll effects
- **Responsive Design**: Fully optimized for all devices (desktop, tablet, mobile)
- **Project Filtering**: Search and filter projects by technology stack
- **Live Demo Links**: Display project repositories and live demo links

### Sections
1. **Hero Section** - Animated introduction with typing effect
2. **About** - Profile information and statistics fetched from GitHub
3. **Skills** - Animated skill bars showing technical expertise
4. **Projects** - Dynamic project cards with GitHub data
5. **Contact** - Contact form and social links

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Three.js & React Three Fiber** - 3D graphics and animations
- **GSAP** - Advanced animations and scroll effects
- **Framer Motion** - React animation library
- **Font Awesome** - Icons

### API & Data
- **GitHub API** - Dynamic repository fetching
- **Axios** - HTTP client

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Kiranpjk/port.git
cd port
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure GitHub Username**

Edit `src/lib/github.js` and update the username:
```javascript
const GITHUB_USERNAME = 'YourGitHubUsername';
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` directory to Netlify

### Deploy to GitHub Pages

1. Update `next.config.mjs` with your repository name:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
};
```

2. Build and export:
```bash
npm run build
```

3. Deploy the `out` directory to GitHub Pages

## 🎨 Customization

### Update Personal Information

1. **GitHub Data**: Update username in `src/lib/github.js`
2. **Hero Section**: Edit `src/components/Hero.js`
3. **Skills**: Modify skill categories in `src/components/Skills.js`
4. **Colors**: Customize theme colors in `tailwind.config.js` and `src/app/globals.css`

### Add Featured Projects

Edit `src/lib/github.js` and update the `featuredRepoNames` array:
```javascript
const featuredRepoNames = ['project1', 'project2', 'project3'];
```

### Modify Animations

- **GSAP animations**: Edit in component files (e.g., `About.js`, `Skills.js`)
- **Framer Motion**: Update `initial`, `animate`, and `transition` props in components

## 📁 Project Structure

```
port/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.js         # Root layout
│   │   └── page.js           # Home page
│   ├── components/
│   │   ├── ThreeBackground.js # 3D background
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Skills.js          # Skills section
│   │   ├── Projects.js        # Projects section
│   │   ├── Contact.js         # Contact section
│   │   └── Footer.js          # Footer
│   └── lib/
│       └── github.js          # GitHub API integration
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

## 🎯 Features in Detail

### GitHub Integration
- Fetches user profile data (name, bio, avatar, stats)
- Retrieves all public repositories with metadata
- Displays project languages, stars, forks
- Shows live demo links (homepage or GitHub Pages)
- Search and filter by technology

### 3D Effects
- Three.js animated starfield background
- Responsive and performant on all devices
- Smooth rotation and parallax effects

### Animations
- GSAP scroll-triggered animations
- Framer Motion component animations
- Typing effect for hero section
- Smooth page transitions
- Animated skill bars

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Jaya Kiran**
- GitHub: [@Kiranpjk](https://github.com/Kiranpjk)
- Portfolio: [https://port-liart-three.vercel.app/](https://port-liart-three.vercel.app/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js, Three.js, GSAP, and Framer Motion
