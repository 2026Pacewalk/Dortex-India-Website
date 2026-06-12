# Dortex India — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | React DOM renderer |
| `vite` | ^6.0.0 | Build tool |
| `@vitejs/plugin-react` | ^4.0.0 | Vite React plugin |
| `typescript` | ^5.7.0 | Type system |
| `tailwindcss` | ^4.0.0 | Utility-first CSS |
| `@tailwindcss/vite` | ^4.0.0 | Tailwind Vite integration |
| `gsap` | ^3.12.0 | Animation engine (ScrollTrigger, SplitText plugins — all free) |
| `lenis` | ^1.2.0 | Smooth scroll with inertia |
| `lucide-react` | ^0.500.0 | Icon library |

Fonts loaded via Google Fonts CDN in `index.html`: Instrument Serif, Inter, Geist Mono. No npm font packages needed.

---

## Component Inventory

### Layout (shared)

| Component | Source | Notes |
|-----------|--------|-------|
| `Navigation` | Custom | Transparent-to-glass transition on scroll. Desktop center links + right pill. Mobile: hamburger + fullscreen overlay menu. |
| `Footer` | Custom | 4-column grid, standard scroll-reveal animation. |
| `MobileActionBar` | Custom | Fixed bottom bar, viewport-width `< 768px` only. Slides up on load. |

### Sections (page-specific, used once)

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Full-viewport with background image, illumination sweep, floating metric cards. |
| `AboutSection` | Custom | Two-column split: image collage left, content + stats right. |
| `ProductsSection` | Custom | Sticky parallax explorer. Left sticky title panel, right scrolling product blocks with spec tables. |
| `WhyChooseUsSection` | Custom | 4-column feature card grid (8 cards). |
| `IndustriesSection` | Custom | 5-column photo card grid (10 cards) with gradient overlays. |
| `InfrastructureSection` | Custom | 3-column masonry gallery (5 images) with hover captions. |
| `TestimonialsSection` | Custom | CSS-driven auto-sliding horizontal carousel (6 cards), pause on hover. |
| `ContactSection` | Custom | Two-column: info + inquiry form, Google Map embed below. |
| `BottomCTABar` | Custom | Full-width gradient bar above footer. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| `SectionHeader` | Custom | All sections except Hero, BottomCTA. Consistent eyebrow + headline + optional subtext pattern. Accepts alignment prop (center / left). |
| `ScrollReveal` | Custom | Wrapper used by nearly every section/element. Applies standard GSAP ScrollTrigger reveal (translateY + opacity). Configurable delay, stagger, direction via props. |
| `StatCounter` | Custom | AboutSection (4 counters). GSAP-driven count-up from 0 to target value. |

### Hooks

| Hook | Purpose |
|------|---------|
| `useScrollReveal` | Encapsulates the repeated GSAP ScrollTrigger + Lenis sync pattern. Returns a ref to attach to animated elements. Accepts config for direction, distance, delay, duration. |
| `useLenis` | Initializes Lenis instance, syncs with ScrollTrigger, exposes the instance for scroll-to actions. Placed at app root level. |
| `useActiveProduct` | Intersection Observer logic for ProductsSection sticky parallax. Tracks which product block is in viewport center and drives the left panel active highlight. |

---

## Animation Implementation

| Animation | Library / Approach | Implementation | Complexity |
|-----------|-------------------|----------------|------------|
| Smooth scroll | Lenis | Global instance synced to ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`. Single init in `useLenis` hook at root. | Low |
| Section scroll-reveals | GSAP + ScrollTrigger | `useScrollReveal` hook wraps `gsap.to` + `ScrollTrigger.create` with `start: "top 80%"` or `"top 75%"`. Applied via `ScrollReveal` wrapper component. | Low |
| Hero entrance sequence | GSAP timeline | Single timeline on mount: background scale (1.05→1), text stagger (eyebrow → headline → subheadline → CTA). No scroll trigger. | Medium |
| Hero illumination sweep | CSS animation | Pure CSS `@keyframes` — `translateX(-120%)` to `120%)` over 5s linear infinite with 3s pause. Single div with box-shadow glow. No JS needed. | Low |
| Hero metric cards entrance | GSAP + ScrollTrigger | `translateX(40px)` stagger, triggered 0.3s after headline. Part of hero timeline or chained ScrollTrigger. | Low |
| Nav background transition | CSS transition | `transition: background 0.4s ease` toggled by scroll listener (>100px threshold). State-driven class swap. | Low |
| Sticky parallax product explorer | GSAP ScrollTrigger (scrub) | Left panel `position: sticky`. Right panel images use `data-speed` parallax via ScrollTrigger scrub. `useActiveProduct` hook with Intersection Observer drives active highlight on left. | High |
| Product active indicator | GSAP | `scaleY(0→1)` on border-left pseudo-element when active state changes. | Low |
| Stat counter animation | GSAP | `gsap.to` with `snap` on innerText, 1.5s duration, ScrollTrigger at `top 75%`. | Low |
| Why Choose Us card hover | CSS transition | `transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease`. Pure CSS, no JS. | Low |
| Industry card hover image zoom | CSS transition | `transition: transform 0.6s ease` on image. Parent `overflow: hidden`. | Low |
| Testimonial auto-carousel | CSS animation | `@keyframes` infinite `translateX` loop, 4s per card pause via `animation-delay` and `animation-timing-function: steps()`. Pause on hover via `animation-play-state`. No JS carousel library — 6 cards, simple horizontal scroll, no touch/swipe complexity. | Medium |
| Mobile menu overlay | GSAP timeline | Open: stagger items in (0.08s stagger). Close: reverse stagger (0.05s delay). | Medium |
| Mobile action bar entrance | GSAP | `translateY(100%)` to 0, delay 1s on load. Single tween. | Low |
| Infrastructure image hover caption | CSS transition | Overlay opacity + caption `translateY(10px→0)` on hover. Pure CSS. | Low |
| Card stagger reveals | GSAP ScrollTrigger | Grid items use `stagger: 0.06–0.1s` with `ScrollReveal` component. | Low |

---

## State & Logic Plan

### Active Product Tracking (ProductsSection)

The sticky parallax explorer requires knowing which of the 6 product blocks is currently centered in the viewport to highlight the corresponding title in the left panel. This is a cross-DOM coordination problem: the left panel is sticky (independent scroll context) and the right panel scrolls normally.

**Approach:** `useActiveProduct` hook creates 6 Intersection Observers (one per product block, `rootMargin: "-40% 0px -40% 0px"` to detect center-positioned elements). When a block enters the center band, its index becomes `activeIndex`. The left panel reads `activeIndex` to apply the active style and border indicator. This avoids ScrollTrigger complexity for a simple viewport-center detection.

### Lenis ↔ ScrollTrigger Sync

Lenis must feed its scroll position into GSAP's ScrollTrigger for all scroll-driven animations to work correctly. This is a one-time setup: Lenis `scroll` event calls `ScrollTrigger.update()`. Implemented once in `useLenis` at the app root. No per-component coordination needed.

### Hero Entrance Timeline Ordering

The hero has a sequenced entrance: illumination sweep starts independently (CSS infinite loop), while the content follows a strict order (eyebrow → headline → subheadline → CTA → metric cards). A single GSAP timeline on mount with explicit delays ensures correct sequencing without scroll dependency. The metric cards are the last element but their entrance can be part of the same timeline (delay 1.4s) rather than a separate ScrollTrigger — they are always in viewport at hero load.

---

## Other Key Decisions

### Testimonial Carousel: CSS-only vs Library

The testimonial section is a horizontal auto-sliding carousel with 6 cards, 4s interval, pause on hover. No swipe gestures, no dynamic card injection, no prev/next navigation. A CSS `@keyframes` infinite animation with `translateX` and `animation-play-state: paused` on hover is sufficient and avoids adding a carousel dependency. The animation moves a single inner container by `translateX(-100%)` over 24s (6 cards × 4s) with `linear` timing.

### No shadcn/ui Components

The design is entirely bespoke — no standard form patterns, dialogs, tables, or data-display components that would benefit from shadcn primitives. The inquiry form is a styled native form. The mobile menu is a custom fullscreen overlay. Adding shadcn would introduce unused infrastructure. All components are built from scratch with Tailwind.
