# MyPortfolio

Personal portfolio site for **Jawad Sami** — Software Engineer. Built with React, TypeScript, and Vite, featuring smooth scroll navigation, animated sections, and a clean, modern UI.

🔗 Live site: _add your deployed URL here_

## Features

- **Hero** — animated intro with rotating role titles
- **About** — background and profile summary
- **Skills** — categorized tech stack with icons
- **Experience** — work history timeline
- **Projects** — showcase of selected work
- **Stats** — animated count-up metrics
- **Contact** — social and email links
- Scroll-spy navbar with active section highlighting
- Back-to-top button
- Smooth animations powered by Framer Motion

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/) — icons
- [Oxlint](https://oxc.rs/) — linting

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/jawadsamiulhaq/MyPortfolio.git
cd MyPortfolio
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally with hot module replacement at `http://localhost:5173`.

### Build

```bash
npm run build
```

Type-checks and bundles the app for production into `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/       # UI sections (Hero, About, Skills, Experience, Projects, Contact, ...)
│   └── icons/        # Custom brand icons
├── data/
│   └── content.ts    # Site content — nav links, socials, skills, experience, projects
├── hooks/            # Custom hooks (scroll spy, count-up animation)
├── App.tsx           # Root component
└── main.tsx          # Entry point
```

Most personal/site content (name, links, skills, experience, projects) is centralized in [src/data/content.ts](src/data/content.ts) for easy editing.

## Contact

- GitHub: [@jawadsamiulhaq](https://github.com/jawadsamiulhaq)
- LinkedIn: [Jawad Sami Ul Haq](https://www.linkedin.com/in/jawad-sami-ul-haq-ab2a44217/)

## License

This project is for personal use. Feel free to fork it for inspiration, but please don't republish it as your own portfolio.
