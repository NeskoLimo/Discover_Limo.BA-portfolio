# Bernard Limo — Portfolio Website

Personal portfolio website for **Bernard Limo**, Technical Business Analyst & Service Delivery Manager based in Nairobi, Kenya.

🔗 **Live site:** [https://bernard-portfolio.onrender.com](https://bernard-portfolio.onrender.com)

---

## Tech Stack

- **Pure HTML / CSS / Vanilla JS** — no frameworks, no build step required
- **Fonts:** Inter + Instrument Serif (Google Fonts)
- **Hosting:** [Render](https://render.com) — deployed as a Static Site

---

## Project Structure

```
bernard-limo-portfolio/
├── index.html          # Main portfolio page (single-page)
├── assets/             # Create this folder for images & files
│   ├── photo.jpg       # Profile photo (see instructions below)
│   ├── bernard-limo-cv.pdf   # Downloadable CV
│   └── badges/         # Certification badge images (optional)
│       └── ibm.png
├── README.md           # This file
├── .gitignore          # Git ignore rules
└── render.yaml         # Render deployment config
```

---

## Local Development

No build tools needed. Just open the file in a browser:

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/bernard-limo-portfolio.git
cd bernard-limo-portfolio

# Open directly in browser (macOS)
open index.html

# Or on Linux
xdg-open index.html

# Or just drag index.html into any browser window
```

---

## Deploying to Render (Static Site)

### First-time setup

1. Push this repo to GitHub
2. Go to [https://dashboard.render.com](https://dashboard.render.com)
3. Click **New +** → **Static Site**
4. Connect your GitHub account and select this repository
5. Fill in the settings:

| Setting | Value |
|---|---|
| **Name** | `bernard-limo-portfolio` |
| **Branch** | `main` |
| **Root Directory** | *(leave blank)* |
| **Build Command** | *(leave blank — no build needed)* |
| **Publish Directory** | `.` |

6. Click **Create Static Site**

### Subsequent updates

Every push to `main` auto-redeploys the site in ~30 seconds.

```bash
git add .
git commit -m "Update projects section"
git push origin main
```

---

## How to Add Your Profile Photo

The About section currently shows a placeholder box labelled "Photo".

**To replace it with a real image:**

1. Create an `assets/` folder in the repo root
2. Add your photo as `assets/photo.jpg` (recommended: square crop, min 240×240px)
3. In `index.html`, find this block in the `#about` section:

```html
<div class="about-img" aria-label="Profile photo placeholder"></div>
```

4. Replace it with:

```html
<img class="about-img" src="assets/photo.jpg" alt="Bernard Limo" />
```

5. In the CSS, find `.about-img::after` and remove that entire rule (it's the one that renders the "Photo" label — no longer needed once a real image is in place)

---

## Customising Each Section

Every section has **scalability comments** directly in `index.html` — look for `<!-- SCALABILITY: ... -->` in the HTML and `/* SCALABILITY: ... */` in the CSS. They explain exactly how to extend each component.

### Quick reference

| Section | How to extend |
|---|---|
| **Hero** | Edit name, tagline, bio, stat values inline |
| **About** | Add `<p class="about-body">` paragraphs; swap image placeholder |
| **Experience** | Copy any `.exp-item` block; newest role goes first |
| **Projects** | Copy any `.proj-card` block; cards wrap automatically |
| **Skills** | Add `<span class="skill-item">` or a whole new `.skill-group` |
| **Certifications** | Copy any `.cert-item` block; link to Credly by wrapping in `<a>` |
| **Contact** | Add `<a class="contact-link">` items; they wrap via flexbox |

### Adding a new project card

```html
<div class="proj-card reveal">
  <div class="proj-period">Month Year – Month Year</div>
  <div class="proj-sector">Industry · Type</div>
  <h3 class="proj-title">Project Name</h3>
  <p class="proj-desc">What you did and why it mattered.</p>
  <div class="proj-impact">↗ Key outcome or metric</div>
</div>
```

### Adding a new experience entry

```html
<div class="exp-item reveal">
  <div class="exp-date">Mon Year — Mon Year</div>
  <div>
    <div class="exp-role">Your Role Title</div>
    <div class="exp-co">Company Name</div>
    <p class="exp-desc">What you did, impact, scope.</p>
    <div class="exp-metrics">
      <span class="metric">↑ Key metric</span>
    </div>
  </div>
</div>
```

### Updating your LinkedIn URL

Search `index.html` for `https://linkedin.com` and replace with your actual profile URL.

---

## Planned Improvements (Roadmap)

- [ ] Add real profile photo (`assets/photo.jpg`)
- [ ] Add downloadable CV link (`assets/bernard-limo-cv.pdf`)
- [ ] Populate LinkedIn URL
- [ ] Add more projects as they are completed
- [ ] Add Open Graph meta tags for social sharing previews
- [ ] Add a favicon (`favicon.ico` or `favicon.svg`)
- [ ] Add a writing / blog section
- [ ] Add Calendly or contact form to Contact section
- [ ] Add credential badge images for certifications

---

## License

This project is personal and not licensed for reuse. All content belongs to Bernard Limo.

---

*Built with care. Deployed on Render.*
