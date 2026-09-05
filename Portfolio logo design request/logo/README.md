# TJ monogram — asset pack

Colors
- ink  oklch(0.24 0.02 255)  ≈ #1D2632
- blue oklch(0.58 0.13 250)  ≈ #3B76C8
- blue on dark oklch(0.72 0.13 250) ≈ #6FA8E8

Files
- tj-mark.svg — primary mark, with the horizon rule
- tj-mark-no-rule.svg — mark only (use inside tiles, avatars, tight spaces)
- tj-mark-reversed.svg — for dark backgrounds
- tj-mark-mono.svg — single colour, inherits `currentColor`
- tj-lockup.svg — horizontal lockup with name and title
- favicon.svg — heavier stroke, tuned for tab size
- favicon-16/32/48/64/512.png, apple-touch-icon.png

Clear space: one stem width (9% of the mark's box) on all sides.
Minimum size: 16px. Below 24px use favicon.svg or the PNGs — the lighter
primary stroke closes up.

Head snippet:

    <link rel="icon" href="/assets/logo/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="/assets/logo/favicon-32.png" sizes="32x32">
    <link rel="apple-touch-icon" href="/assets/logo/apple-touch-icon.png">
    <meta name="theme-color" content="#f8fafc">

The lockup SVG uses live text in Instrument Sans / IBM Plex Mono. If you
share it outside a page that loads those fonts, convert the text to
outlines or swap in Helvetica.
