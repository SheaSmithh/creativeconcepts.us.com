# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS website for Creative Concepts, a painting and renovation company in the Chicagoland area. No build system, package manager, or backend — all files are served directly.

## Development

Open any HTML file directly in a browser to preview. There is no build step, local dev server, or test suite.

## Architecture

### Pages
- `index.html` — Home page with hero section, before/after showcase, and project gallery
- `about.html` — Company background
- `services.html` — Service offerings
- `contact.html` — Contact information
- `schedule.html` — Free estimate request page (currently shows phone number; online form not yet implemented)
- `schedule2.html` — Alternate schedule page

### Shared Assets (`assets/`)
- `style.css` — Single global stylesheet used by all pages; includes responsive breakpoints at 1024px, 900px, 768px, and 480px
- `copy-to-clipboard.js` — Adds click-to-copy behavior to any element with class `copy-text` and a `data-copy` attribute

### Images (`img/`)
- Before/After pairs: `Before1–4.jpg` / `After1–4.jpg`
- Floor gallery: `FloorA–D.jpg`
- Stairs gallery: `StairsA–D.jpg`
- Logo: `CreativeConcepts.png`

## Conventions

### HTML Structure (consistent across all pages)
1. `<div class="top-bar">` — Logo (left) + phone/CTA (center)
2. `<nav>` — Main navigation
3. `<header class="title-bar">` — Page title bar
4. Page-specific `<section>` content
5. `<footer>`
6. `<script src="assets/copy-to-clipboard.js">` at end of body

### Styling
- Brand color: `#004466` (dark blue) and `#006699` (mid blue)
- Fonts: Montserrat (headings) and Lora (body), loaded from Google Fonts
- Page-specific styles are written inline in `<style>` blocks within the page `<head>`; global/shared styles go in `assets/style.css`

### Phone number
The phone number `815-345-9197` appears on every page with `class="copy-text" data-copy="815-345-9197"` to enable click-to-copy via `copy-to-clipboard.js`.
