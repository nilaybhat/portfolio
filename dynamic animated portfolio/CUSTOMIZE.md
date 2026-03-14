# Quick Reference & Customization Guide

## 🎨 Customization Map

Here's exactly what to change and where:

---

## 📝 Personal Information

### File: `index.html`

**Your Name & Title** (Line ~45)
```html
<h1 class="hero__title">Nilay <span class="hero__highlight">Bhattacharya</span></h1>
<p class="hero__typewriter">
  <span id="typing"></span>
```

**Typing Phrases** (Line ~260 in script.js)
```javascript
const typingPhrases = [
  "Web Developer",
  "Cybersecurity Learner",
  "Future Bug Bounty Hunter",
];
```

**Social Links**
- Line 33: GitHub navbar link
- Line 34: LinkedIn navbar link
- Line 468: Phone number
- Line 473: GitHub link
- Line 479: LinkedIn link
- Line 550: GitHub URL in footer
- Line 551: LinkedIn URL in footer

---

## 🎯 Main Sections to Update

### 1. Hero Section (Lines 42-68)
```html
<!-- Change these: -->
<p class="hero__subtitle">Hi, I'm</p>
<h1 class="hero__title">Nilay Bhattacharya</h1>
<a href="https://github.com/nilaybhat">GitHub Profile</a>
```

### 2. About Section (Lines 73-130)
```html
<!-- Update your bio, journey, and goals here -->
<p>Full-stack developer and cybersecurity enthusiast from India...</p>

<!-- Change location and phone -->
Location: <strong>India</strong> | Phone: <strong>+91 8327062080</strong>
```

### 3. Skills Section (Lines 132-220)
```html
<!-- Modify skill progress percentages -->
<span class="progress__bar" style="--progress: 90%"></span>
<!-- Change from 90% to your actual level -->
```

### 4. Projects Section (Lines 222-280)
```html
<!-- Update project titles, descriptions, and GitHub links -->
<h3>Your Project Name</h3>
<p>Your project description...</p>
<a href="YOUR-GITHUB-REPO-URL">GitHub</a>
```

### 5. GitHub Section (Lines 305-335)
```html
<!-- Update your GitHub username -->
<a href="https://github.com/YOUR-USERNAME" target="_blank">
  Visit GitHub Profile
</a>
```

### 6. Learning Journey (Lines 338-380)
```html
<!-- Update your milestones and dates -->
<span class="timeline__date">Your date</span>
<h3>Your milestone</h3>
```

### 7. Contact Section (Lines 460-500)
```html
<!-- Update all contact information -->
<a href="tel:+918327062080">+91 8327062080</a>
<a href="https://github.com/nilaybhat">github.com/nilaybhat</a>
```

---

## 🎨 Colors & Styling

### File: `assets/css/style.css` (Lines 1-20)

**Change Color Scheme:**
```css
:root {
  --bg: #070a12;              /* Background */
  --surface: rgba(19, 23, 36, 0.82);
  --text: #e6e8ff;            /* Text color */
  --primary: #5d61ff;         /* Main accent - CHANGE THIS */
  --primary-2: #9b6bff;       /* Alt accent */
  --accent: #00e5ff;          /* Secondary - CHANGE THIS */
  --danger: #ff4c6d;          /* Error/alert color */
  --radius: 18px;             /* Border radius */
}
```

**Example: Purple & Pink Theme**
```css
--primary: #a855f7;    /* Purple */
--accent: #ec4899;     /* Pink */
```

**Example: Green & Orange Theme**
```css
--primary: #16a34a;    /* Green */
--accent: #ea580c;     /* Orange */
```

---

## 🖼️ Images & Media

### File: `assets/logo.jpg`
- **What**: Your profile photo
- **Location**: `assets/logo.jpg`
- **Size**: 400x400px (square)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 200KB

**Where logo appears:**
1. Navbar top-left (small circular icon)
2. Hero section (main profile display)
3. About section (below introduction)

---

## 📱 Responsive Breakpoints

### File: `assets/css/style.css` (Lines 920+)

```css
/* Desktop - Default (1024px+) */
/* All full features enabled */

/* Tablet (1024px and below) */
@media (max-width: 1024px) {
  /* Single column layouts */
}

/* Mobile (768px and below) */
@media (max-width: 768px) {
  /* Hamburger menu active */
  /* Smaller fonts */
  /* Stacked cards */
}

/* Small Mobile (480px and below) */
@media (max-width: 480px) {
  /* Minimal layout */
  /* Maximum readability */
}
```

---

## 🔧 Animation Settings

### File: `assets/js/script.js`

**Typing Speed** (Line ~280)
```javascript
const delay = direction === 1 ? 100 : 50;  // Adjust milliseconds
// 100ms = slower, 50ms = faster
```

**Scroll Animation Threshold** (Line ~150)
```javascript
{ threshold: 0.15 }  // 0.15 = 15% visible before animation
// Increase for earlier trigger, decrease for later
```

**Animation Duration** (CSS Line ~20)
```css
--transition: 220ms ease;  /* Change 220ms for all transitions */
```

---

## 🔗 URLs to Update

Find and replace these with YOUR information:

| Item | Replace | New Value |
|------|---------|-----------|
| GitHub URL | `nilaybhat` | Your username |
| GitHub Repo | `nilaybhat/nilaybhat.git` | Your repo path |
| LinkedIn URL | Full URL | Your profile URL |
| Phone | `+918327062080` | Your phone |
| Projects | Project URLs | Your repo links |

---

## 📊 Form Customization

### File: `index.html` (Lines 445-478)

**Current Fields:**
```html
<input name="name" />      <!-- Name field -->
<input name="email" />     <!-- Email field -->
<textarea name="message" />  <!-- Message field -->
```

**To Add New Field:**
```html
<div class="field">
  <label for="subject">Subject</label>
  <input id="subject" name="subject" type="text" required />
</div>
```

---

## 🎯 Removing Sections

**Don't need Bug Bounty section?**

1. Remove nav link:
```html
<!-- Delete this line -->
<a class="nav__link" href="#bugbounty">Bug Bounty</a>
```

2. Remove section:
```html
<!-- Delete entire #bugbounty section -->
<section class="section" id="bugbounty">
  ...entire section...
</section>
```

---

## ✨ Adding New Sections

**Template for new section:**
```html
<!-- NEW SECTION -->
<section class="section" id="new-section">
  <div class="container">
    <div class="section__header">
      <h2>Your Section Title</h2>
      <p>Description goes here.</p>
    </div>

    <div class="cards">
      <article class="card animate" data-animate="fade-up">
        <h3>Card Title</h3>
        <p>Card content...</p>
      </article>
    </div>
  </div>
</section>
```

1. Add nav link in navbar
2. Add section HTML
3. Keep animations with `data-animate` attributes
4. Use existing CSS classes for consistency

---

## 🐛 Common Customizations

### Change Section Title Font Size
**File**: `assets/css/style.css` Line 392
```css
.section__header h2 {
  font-size: clamp(2rem, 3vw, 2.6rem);  /* Adjust these values */
}
```

### Adjust Card Padding
**File**: `assets/css/style.css` Line 435
```css
.card {
  padding: 1.6rem;  /* Increase/decrease for spacing */
}
```

### Change Button Style
**File**: `assets/css/style.css` Line 162
```css
.btn {
  border-radius: 999px;  /* More/less rounded */
  padding: 0.56rem 1rem;  /* Adjust padding */
}
```

### Modify Skill Card Width
**File**: `assets/css/style.css` Line 479
```css
.skills {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* Increase 250px for wider cards */
}
```

---

## 📋 Quick Find & Replace

Use your editor's Find & Replace (Ctrl+H):

| Find | Replace With |
|------|---|
| `nilaybhat` | Your GitHub username |
| `Nilay Bhattacharya` | Your name |
| `+91 8327062080` | Your phone |
| `#5d61ff` | Your primary color |
| `#00e5ff` | Your secondary color |

---

## 🎬 Making Changes Live

After editing files:

1. **Local testing**: Open `index.html` in browser (refresh with Ctrl+R)
2. **Check mobile**: Resize browser window or open DevTools (F12)
3. **Push to GitHub**: 
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
4. **Auto-deployed**: Your changes go live in 1-2 minutes!

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Images not showing | Check path: `assets/logo.jpg` |
| Changes not updating | Hard refresh: Ctrl+Shift+R |
| Mobile menu broken | Check CSS media queries |
| Animations not working | Verify `script.js` is loaded |
| Links not working | Verify URLs and hashes match |
| Colors look wrong | Clear cache and reload |

---

**Tip**: Keep this guide handy when updating your portfolio! 📌
