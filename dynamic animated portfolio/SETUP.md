# Setup Instructions

## 📸 Adding Your Profile Logo

Your portfolio is ready! Follow these quick steps to complete the setup:

### Step 1: Prepare Your Image
- Recommended size: 400x400 pixels (square format)
- Formats: JPG, PNG, or WebP
- File size: Under 200KB

### Step 2: Add Logo to Portfolio
1. Locate the `assets/` folder in your portfolio directory
2. Place your profile image there and **rename it to `logo.jpg`**
3. The image will automatically appear in:
   - Navigation bar (small circular icon)
   - Hero section (main profile photo)
   - About section (below introduction)

### Step 3: Verify Everything
- Open `index.html` in your browser
- Check that your logo appears in:
  - Top-left corner of navbar
  - Hero section profile card
  - About section image

---

## 🔗 Social Links Integration

Your social links are already configured:
- **GitHub**: https://github.com/nilaybhat
- **LinkedIn**: https://www.linkedin.com/in/nilay-bhattacharya-163b15349
- **Phone**: +91 8327062080

## 🎨 Customization Quick Tips

### Update Your Projects
Edit the Projects section in `index.html`:
```html
<article class="project-card animate" data-animate="fade-up">
  <div class="project-card__header">
    <h3>Your Project Title</h3>
    <p class="project-tag">Technology</p>
  </div>
  <!-- Update description and links -->
</article>
```

### Update Skills Progress
Modify the progress percentage in skill cards:
```html
<span class="progress__bar" style="--progress: 85%"></span>
<span class="progress__label">85%</span>
```

### Change Theme Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --primary: #5d61ff;      /* Main accent color */
  --accent: #00e5ff;       /* Secondary color */
  --bg: #070a12;           /* Background */
  --text: #e6e8ff;         /* Text color */
}
```

---

## 📱 Test Responsiveness

1. **Desktop**: Open in full browser window
2. **Tablet**: Resize browser to 768px width
3. **Mobile**: Resize to 480px width or use phone emulation (F12 → Ctrl+Shift+M)

All sections should adapt smoothly!

---

## 🚀 Ready to Deploy?

### Option 1: GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

Then enable Pages in repository settings.

### Option 2: Netlify (Free)
- Drag and drop your portfolio folder to Netlify.com
- Your site goes live instantly!

### Option 3: Vercel (Free)
- Connect your GitHub repo at vercel.com
- Auto-deploys on each push

---

## ✅ Final Checklist

- [ ] Added `logo.jpg` to `assets/` folder
- [ ] Logo appears in navbar, hero, and about sections
- [ ] All social links work (GitHub, LinkedIn)
- [ ] Contact form displays correctly
- [ ] Mobile menu works on small screens
- [ ] Dark mode toggle functions
- [ ] Back-to-top button appears when scrolling
- [ ] Animations work smoothly
- [ ] All sections are responsive

---

## 💡 Pro Tips

1. **High-quality images**: Use PNG for better quality transparent backgrounds
2. **Optimize images**: Use TinyPNG.com to reduce file size
3. **Update frequently**: Add new projects as you build them
4. **Share everywhere**: Put your portfolio URL in your GitHub profile and LinkedIn
5. **Track analytics**: Add Google Analytics to track visitors

---

## 🎯 Next Features to Consider

- Add blog section
- Projects with live demos
- Case studies section
- Resume download button
- Dark/Light theme toggle (already included!)
- Scroll animations (already included!)

---

**Your portfolio is ready! Just add your logo and you're all set! 🎉**
