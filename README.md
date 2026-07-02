# VRAI Solutions — Software House Profile Website

A modern, high-performance Software House profile website for **VRAI Solutions**, a digital services agency specializing in web development, MATLAB processing, academic assistance, research analytics, UI/UX design, and more.

Live site: [vraisolutions.vercel.app](https://vrai-solutions.vercel.app) *(update with actual URL)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| Form Delivery | FormSubmit (AJAX) |
| Icons | Google Material Symbols |
| Deployment | Vercel / Netlify |

---

## Features

- **Hero Section** — Full-screen landing with headline, CTA, and hero visual
- **Services Grid** — 8 service categories with icons and descriptions
- **Stats Counter** — Animated count-up numbers triggered on scroll via IntersectionObserver
- **Portfolio Gallery** — Masonry-style grid with local high-res images and hover effects
- **Process Timeline** — 4-step engagement process breakdown
- **Why Us** — Feature highlights with icon cards
- **Contact Form** — Fully functional form via FormSubmit AJAX, with loading state and success confirmation
- **Footer** — Links, social, and brand info

---

## Project Structure

```
vrai-solutions/
├── public/                        # Static assets (images)
│   ├── hevafsid-erp-system.png
│   ├── hevafsid-erp-system2.png
│   ├── Signal Detection matlab.png
│   ├── Signal Detection matlab2.png
│   ├── research-data-analitycs.png
│   └── touchdesigner.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx            # Animated stats counter
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx             # FormSubmit integration
│   │   ├── Footer.jsx
│   │   └── SpotlightCard.jsx
│   ├── data/
│   │   └── content.js              # Centralized copy & data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/RaisyalD/vraisolutions.git
cd vraisolutions

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Contact Form Setup

The contact form uses [FormSubmit](https://formsubmit.co/) for zero-backend email delivery.

**First-time activation:**
1. Deploy the site and submit the form once
2. FormSubmit will send a confirmation email to `vrai.solutions26@gmail.com`
3. Click the activation link — all future submissions will land in your inbox

No API keys or environment variables needed.

---

## Customization

All website copy, stats, service cards, and portfolio items are centralized in one file:

```
src/data/content.js
```

Edit that file to update any text, numbers, or portfolio entries without touching component code.

---

## License

© 2026 VRAI Solutions. All rights reserved.
