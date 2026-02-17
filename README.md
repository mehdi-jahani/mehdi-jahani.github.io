# Portfolio – Standalone for GitHub Pages

This project contains only the **Portfolio** page and is ready to deploy on GitHub Pages.

---

## Deploy to GitHub Pages (step by step)

### Step 1: Push the project to GitHub

If you haven’t already:

1. Create a **new repository** on GitHub (e.g. `portfolio-github` or `username.github.io` for a user site).
2. Do **not** add a README, .gitignore, or license (you already have files).
3. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit – Portfolio for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

---

### Step 2: Turn on GitHub Pages from Actions

1. Open your repo on GitHub.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions** (not “Deploy from a branch”).
4. Save. You don’t need to create a branch or add any files by hand; the workflow will build and deploy.

---

### Step 3: Run the deployment

- Every **push to `main`** runs the workflow: it builds the site and deploys it to GitHub Pages.
- You can also run it once by hand: **Actions** tab → **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**.

Wait for the workflow to finish (green check). Then open your site:

- **Project site** (e.g. repo `portfolio-github`):  
  `https://YOUR_USERNAME.github.io/portfolio-github/`
- **User/org site** (repo `YOUR_USERNAME.github.io`):  
  `https://YOUR_USERNAME.github.io/`

---

### Step 4 (optional): Different default branch

If your default branch is **master** instead of **main**, edit `.github/workflows/deploy-pages.yml` and change:

```yaml
branches: [ main ]
```

to:

```yaml
branches: [ master ]
```

---

## Local development

**Prerequisites:** Node.js and npm.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. The home page (`/`) is the Portfolio page.

## Build static output locally

```bash
npm run build
```

Output is in the `out` folder.

- **Project site** (e.g. `username.github.io/repo-name`): the workflow sets `BASE_PATH` and `ASSET_PREFIX` from the repo name automatically; you don’t need to change anything.
- **User site** (`username.github.io`): same; no base path is used.
- **Local build for a project site:** to test the same paths as GitHub Pages, run:

```bash
BASE_PATH=/your-repo-name ASSET_PREFIX=/your-repo-name/ npm run build
```

## Structure

- `src/pages/index.js` → Home page (Portfolio).
- `src/pages/portfolio.js` → Portfolio page definition.
- `src/containers/Portfolio/` → Portfolio-specific components.
- `src/common/` → Theme, styles, data and shared components.
- `.github/workflows/deploy-pages.yml` → Builds and deploys to GitHub Pages on push to `main`.

Only the Portfolio template is used; other templates are not active.
