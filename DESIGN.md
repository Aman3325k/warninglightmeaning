# DESIGN.md — Design System for warninglightmeaning.com

## Brand
- Site name: WarningLightMeaning.com
- Tagline: "Every dashboard warning light explained clearly."
- Audience: US drivers, all ages, mobile + desktop
- Tone: Trustworthy, clear, calm, authoritative

## Colors
- Background: #FFFFFF
- Primary text: #1A1A1A
- Secondary text: #6B7280
- Primary accent: #F59E0B (amber)
- Accent hover: #D97706
- Danger: #EF4444 (red)
- Warning: #F59E0B (amber)
- Success: #10B981 (green)
- Info: #3B82F6 (blue)
- Border: #E5E7EB
- Surface: #F9FAFB

## Urgency System
- Stop Immediately → #EF4444 red background, white text
- Check Soon → #F59E0B amber background, white text
- Info Only → #6B7280 gray background, white text

## Typography
- Font: Inter (Google Fonts)
- H1: text-4xl font-bold text-[#1A1A1A]
- H2: text-2xl font-semibold text-[#1A1A1A]
- H3: text-xl font-semibold text-[#1A1A1A]
- Body: text-base font-normal leading-relaxed text-[#1A1A1A]
- Meta/small: text-sm text-[#6B7280]
- Eyebrow: text-xs font-semibold uppercase tracking-widest text-[#F59E0B]

## Layout
- Max width: max-w-7xl mx-auto px-4
- Content column: 68% width
- Sidebar: 32% width
- Section padding: py-16
- Card padding: p-6
- Border radius: rounded-lg (cards), rounded-full (pills)
- Grid makes: grid-cols-4
- Grid lights: grid-cols-3

## Components

### Navigation
- Sticky top, white background, border-b border-[#E5E7EB]
- Logo left, links right
- Links: text-sm font-medium text-[#1A1A1A] hover:text-[#F59E0B]

### Cards
- bg-white border border-[#E5E7EB] rounded-lg p-6
- Hover: hover:shadow-md hover:border-[#F59E0B] transition-all

### Buttons
- Primary: bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-lg
- Hover: hover:bg-[#D97706]

### Badges/Pills
- rounded-full text-xs font-semibold px-3 py-1
- Danger: bg-[#EF4444] text-white
- Warning: bg-[#F59E0B] text-white
- Info: bg-[#6B7280] text-white

### Breadcrumb
- text-sm text-[#6B7280]
- Separator: › mx-2

### Sidebar
- sticky top-24 bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm

### Ad Placeholder
- bg-[#F3F4F6] rounded-lg flex items-center justify-center
- Label: text-xs text-[#6B7280] "Advertisement"
- Size: 300x250

## SEO & Performance
- No stock photos
- No decorative gradients
- No custom CSS files — Tailwind only
- Lighthouse target: 95+ all categories
- AdSense-safe: clear content zones, no cluttered layouts
- All images: loading="lazy" alt text required
