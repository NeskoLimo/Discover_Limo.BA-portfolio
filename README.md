# Bernard Limo — Portfolio

Personal portfolio for **Bernard Limo**, Technical Business Analyst & Service Delivery Manager, Nairobi, Kenya.

🔗 **Live:** [https://bernard-portfolio.onrender.com](https://bernard-portfolio.onrender.com)

---

## Stack

| Tool | Purpose |
|---|---|
| React 18 | UI components |
| Vite 5 | Dev server & build |
| CSS Modules | Scoped per-component styles |
| Vanilla JS | Scroll reveal, nav highlight |
| Render | Static site hosting |

No Tailwind, no external UI libraries — intentionally lean for easy maintenance.

---

## Project Structure

```
bernard-portfolio/
│
├── public/
│   ├── limo.jpg              ← profile photo (already in repo)
│   └── favicon.svg           ← add a favicon here
│
├── src/
│   ├── styles/
│   │   └── global.css        ← design tokens, resets, shared classes
│   │
│   ├── hooks/
│   │   └── useReveal.js      ← scroll-reveal IntersectionObserver hook
│   │
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx   / .module.css
│   │   ├── About.jsx  / .module.css
│   │   ├── Experience.jsx    / .module.css
│   │   ├── Projects.jsx      / .module.css
│   │   ├── Skills.jsx        / .module.css
│   │   ├── Certifications.jsx/ .module.css
│   │   ├── Contact.jsx       / .module.css
│   │   └── Footer.jsx        / .module.css
│   │
│   ├── data.js               ← ALL content lives here (single source of truth)
│   ├── App.jsx               ← assembles all section components
│   └── main.jsx              ← Vite entry point
│
├── index.html                ← Vite root HTML
├── vite.config.js
├── package.json
├── render.yaml               ← Render deployment config
└── .gitignore
```

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/NeskoLimo/bernard-portfolio.git
cd bernard-portfolio

# 2. Install
npm install

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173
```

---

## Deploying to Render

The `render.yaml` at the root handles deployment automatically.

### First-time setup on Render

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New +** → **Static Site**
2. Connect GitHub → select `NeskoLimo/bernard-portfolio`
3. Render reads `render.yaml` automatically. Confirm these settings:

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

4. Click **Create Static Site** — live in ~2 minutes.

### Auto-deploy on push

Every `git push` to `main` triggers an automatic redeploy. No manual steps needed.

```bash
git add .
git commit -m "Add new project"
git push origin main
# Render redeploys automatically in ~60 seconds
```

---

## Adding Your Profile Photo

Your photo `limo.jpg` is already in the `/public` folder.

To activate it in the About section:

1. Open `src/components/About.jsx`
2. Find this line:
   ```jsx
   <div className={styles.imgPlaceholder} aria-label="Profile photo placeholder" />
   ```
3. Replace with:
   ```jsx
   <img className={styles.img} src="/limo.jpg" alt="Bernard Limo" />
   ```
4. Open `src/components/About.module.css` and **delete** the `.imgPlaceholder` and `.imgPlaceholder::after` rules.
5. Save and push.

---

## Updating Content

**All content lives in one file: `src/data.js`**

You never need to touch a component just to update text, add a project, or add a role.

### Update personal info / bio
```js
// src/data.js
export const personal = {
  name: 'Bernard Limo',
  email: 'koneslimo@gmail.com',
  phone: '+254 706 262 690',
  linkedin: 'https://www.linkedin.com/in/YOUR_HANDLE', // ← update this
  bio: [
    'First paragraph...',
    'Second paragraph...',
    // add more paragraphs here
  ],
};
```

### Add a new project
```js
// src/data.js → projects array
{
  id: 'proj-7',                          // unique ID
  period: 'Jan 2026 – Present',
  sector: 'Industry · Type',
  title: 'Project Name',
  description: 'What you did and why it mattered.',
  impact: '↗ Key outcome',
  link: null,                            // or 'https://...' to add a live button
},
```

### Add a new experience entry
```js
// src/data.js → experience array (newest first)
{
  id: 'exp-6',
  date: 'Jan 2026 — Present',
  role: 'New Role Title',
  company: 'Company Name',
  description: 'What you did, scope, and impact.',
  metrics: ['↑ Key metric', 'Another metric'],
},
```

### Add a new skill group
```js
// src/data.js → skills array
{
  id: 'skill-languages',
  category: 'Languages',
  items: ['English', 'Swahili', 'French'],
},
```

### Add a certification with a Credly link
```js
// src/data.js → certifications array
{
  id: 'cert-11',
  name: 'New Certification Name',
  issuer: 'Issuing Body',
  link: 'https://www.credly.com/badges/YOUR_BADGE_ID',
},
```

### Add a hero stat
```js
// src/data.js → stats array
{ value: '50+', label: 'Stakeholders engaged' },
```

---

## Adding a New Section

1. Create `src/components/MySectionName.jsx`
2. Create `src/components/MySectionName.module.css`
3. Export your data from `src/data.js`
4. Import and add `<MySectionName />` in `src/App.jsx`
5. Add a nav link in `src/components/Navbar.jsx` → `links` array

---

## Planned Improvements

- [ ] Activate profile photo (`/public/limo.jpg` → swap in `About.jsx`)
- [ ] Update LinkedIn URL in `src/data.js`
- [ ] Add Credly URLs to certification items
- [ ] Add `favicon.svg` to `/public`
- [ ] Add Open Graph meta tags to `index.html`
- [ ] Add downloadable CV link (`/public/bernard-limo-cv.pdf`)
- [ ] Add more projects as completed
- [ ] Add a writing / blog section
- [ ] Add a contact form or Calendly embed

---

## License

Personal project. All content © Bernard Limo.
