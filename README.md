# Data Analyst Portfolio (Jotheeswaran TR)

A premium, dark-themed portfolio website built to showcase Data Analytics projects, experience, and technical skills. 

## 🚀 Features
- **Fully Responsive:** Looks great on mobile, tablet, and desktop.
- **Premium Dark Theme:** Clean, modern aesthetics based on provided UI references.
- **Custom Animations:** Smooth scroll and fade-in effects as you navigate.
- **Zero Dependencies:** Built entirely with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure
- `index.html` — The main structure and content of your website.
- `style.css` — All layout, colors, and responsive design rules.
- `script.js` — Handles scroll animations and smooth navigation.
- `assets/` — Folder to store your resume PDF and dashboard screenshots.

## 🛠️ How to Customize

### 1. Add Your Resume & Images
- Drop your resume PDF into the `assets` folder and name it `resume.pdf`. The "View Resume" button is already linked to `assets/resume.pdf`.
- Drop your project screenshots into the `assets` folder.
- To display screenshots, replace the `<div class="card-image-placeholder">...</div>` in `index.html` with `<img src="assets/your-image.png" alt="Dashboard Screenshot" style="width:100%; height:auto;">`.

### 2. Update Links
- Open `index.html` and search for `href="#"`. Update these with your actual LinkedIn, GitHub, and Case Study URLs.

### 3. Edit Text
- All text is contained within the `index.html` file. Simply open it in any text editor (like VS Code) and edit the text between the tags.

## 🌐 Publishing to GitHub Pages (Free Hosting)

1. Create a new repository on [GitHub](https://github.com/) named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).
2. Upload all the files from this project (`index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder) into that repository.
3. Go to your repository **Settings** > **Pages**.
4. Under "Build and deployment", ensure the source is set to **Deploy from a branch** and the branch is set to `main` (or `master`) and `/root`.
5. Click **Save**. 
6. Wait 1-2 minutes, and your site will be live at `https://yourusername.github.io`!