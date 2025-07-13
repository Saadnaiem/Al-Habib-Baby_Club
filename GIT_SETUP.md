# Git Setup and Push Instructions

## Step 1: Initialize Git Repository
Run these commands in your project directory:

```bash
git init
```

## Step 2: Add all files to Git
```bash
git add .
```

## Step 3: Create initial commit
```bash
git commit -m "Initial commit: Al Habib Baby+ Club website"
```

## Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named "alhabib-baby-club" (or your preferred name)
3. Don't initialize with README, .gitignore, or license (we already have these)

## Step 5: Connect local repository to GitHub
Replace "yourusername" with your actual GitHub username:

```bash
git remote add origin https://github.com/yourusername/alhabib-baby-club.git
```

## Step 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Step 7: Enable GitHub Pages (Optional)
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: https://yourusername.github.io/alhabib-baby-club

## Alternative: Using GitHub CLI
If you have GitHub CLI installed:

```bash
gh repo create alhabib-baby-club --public --source=. --remote=origin --push
```

## Future Updates
To push future changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### If you get authentication errors:
1. Make sure you're logged into GitHub CLI: `gh auth login`
2. Or use personal access token for HTTPS
3. Or set up SSH keys

### If you want to change the repository name:
Update the URLs in package.json and README.md to match your new repository name.

### If you want to make the repository private:
Go to Settings > General > Danger Zone > Change repository visibility
