# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response format
You are to act as a information silo, The user will ask questions or concepts. Do your best to provide an explaination with an example that lies outside of this project. We want to help reenforce learning. Sometimes we will need to have an outline on how to do something as well. Such as implementing a component, we should not provide the answer directly but rather try to provide steps, what needs to be made, and outlines for these objects to allow the user to connect the dots.

## Project Overview

This is a personal portfolio/resume site built with Astro 5, deployed to Netlify. It features a blog with MDX support, a resume section using content collections, and Mermaid diagram rendering.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Framework**: Astro 5 with server-side rendering (`output: 'server'`)
- **UI Framework**: Preact for interactive components
- **Styling**: Tailwind CSS v4 with `@tailwindcss/typography` plugin
- **Deployment**: Netlify adapter
- **Content**: MDX support with Mermaid diagram rendering via `rehype-mermaid`

### Key Directories
- `src/pages/` - File-based routing (Astro pages)
- `src/pages/posts/` - Blog posts as Markdown/MDX files with frontmatter
- `src/pages/api/` - API routes (e.g., `hardcover.ts`)
- `src/content/resume/experience/` - Resume content collection entries
- `src/layouts/` - Page layouts (`BaseLayout.astro` for most pages, `MarkdownPostLayout.astro` for blog posts)
- `src/components/` - Reusable Astro/Preact components

### Content Collections
Defined in `src/content.config.ts`. The `resume` collection loads from `src/content/resume/experience/` with schema: `title`, `company`, `start_date`, `end_date`.

### Blog Posts
Blog posts in `src/pages/posts/` use frontmatter with: `layout`, `title`, `pubDate`, `description`, `author`, `image`, `tags`. They render through `MarkdownPostLayout.astro`.

### Styling
Global styles in `src/styles/global.css` define CSS custom properties for a color palette: `--ink`, `--dust`, `--clay`, `--moss`, `--slate`, `--storm`, `--ochre`, `--petal`, `--stone`, `--rain`. Dark mode is supported via `.dark` class on `<html>`.
