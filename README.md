# AI Art Portfolio

An Apple-inspired AI art portfolio for presenting character-based AI-generated artworks by Lrtisiy.

## Overview

This is a React + Vite single-page portfolio site focused on clean visual presentation, generous spacing, soft glass effects, and local artwork assets. The layout is designed to keep the artworks as the main visual focus across desktop and mobile screens.

Current highlights:

- Minimal translucent top navigation
- Editorial hero section using `37-1.png`
- Character-based artwork collections
- Paginated local image galleries
- Independent About and Contact sections
- Smooth anchor navigation
- Hover motion for cards and buttons
- Responsive layout for mobile browsing

## Gallery Structure

Artwork files are stored in:

```text
public/artworks/
```

The current gallery is organized by character folders:

- `character-37`
- `character-mutsimi`
- `character-togawa`
- `character-jinhsi`
- `character-sparkle`

The homepage hero image uses:

```text
public/artworks/37-1.png
```

## Page Sections

- `Hero`: portfolio title and featured artwork
- `Works`: paginated character artwork galleries
- `About`: character inspiration and visual direction
- `Contact`: standalone contact section with a mail button

## Tech Stack

- React
- Vite
- CSS

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

Recommended platform: Vercel.

Use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

After connecting the GitHub repository to Vercel, every push to the main branch can trigger a new deployment.
