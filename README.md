# Happy 22nd Birthday Abigail! 💖✨

A custom, romantic, and responsive birthday website created with love for Abigail's 22nd birthday.

---

## 🌟 Interactive Highlights
1. **Interactive Cake & Candles**: Tap or click the candles to blow them out, make a wish, and trigger a shower of celebratory confetti!
2. **Virtual Love Letter**: Wax-sealed envelope that opens when clicked to reveal your personal letter.
3. **22 Reasons Why I Love You**: 22 interactive flip cards with lovely memories, traits, and inside jokes.
4. **Polaroid Memory Wall**: Aesthetic polaroid photo frames with captions and full-screen lightbox view.
5. **Our Journey Timeline**: Romantic chapter-by-chapter story of your milestones.
6. **Make a Wish Jar**: Keepsake input box where Abigail can save her wishes for year 22.
7. **Built-in Ambient Music**: Soothing melody generator with play/pause vinyl disc toggle.

---

## 📸 Personalizing Your Website

### 1. Adding Your Real Photos
- Open the `assets/images/` folder.
- Add your favorite photos of the two of you (e.g. `photo1.jpg`, `photo2.jpg`, etc.).
- In `index.html`, find the `<!-- POLAROID MEMORIES GALLERY -->` section and change the `src` attribute of the `<img>` tags:
  ```html
  <img src="assets/images/photo1.jpg" alt="Our Favorite Day" />
  ```

### 2. Customizing the Love Letter
- In `index.html`, find the `<!-- VIRTUAL LOVE LETTER SECTION -->` and edit the paragraphs inside `<div class="letter-body">` to add your personal words.

### 3. Customizing the 22 Reasons
- In `script.js`, edit the `reasonsData` array to adjust any of the 22 reasons and customize inside jokes!

---

## 🚀 Publishing on GitHub & GitHub Pages

### Step 1: Create the GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Set the Repository name to: `Abigails-22nd-Birthday` (or `Abigails-22nd-Birthday`).
4. Set visibility to **Public** (required for free GitHub Pages).
5. Leave "Add a README file" **unchecked** (we already created everything here).
6. Click **Create repository**.

### Step 2: Push Your Code
Open Terminal and run:
```bash
cd ~/Desktop/"Abigails 22nd Birthday"
git add .
git commit -m "Happy 22nd Birthday Abigail!"
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/Abigails-22nd-Birthday.git
git branch -M main
git push -u origin main
```
*(Replace `<YOUR-GITHUB-USERNAME>` with your GitHub username)*

### Step 3: Turn on GitHub Pages (Free Live Website Link)
1. In your GitHub repository, click **Settings** (gear icon at the top).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
4. Click **Save**.
5. Within 1–2 minutes, GitHub will give you a live website link:
   `https://<YOUR-GITHUB-USERNAME>.github.io/Abigails-22nd-Birthday/`
