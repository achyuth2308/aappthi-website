# Aapthi Marketing Solutions — Enterprise Corporate Website

A premium Next.js 14 corporate website for **Aapthi Marketing Solutions Pvt Ltd** — built to impress enterprise clients, investors, and international partners.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router, JavaScript) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | PostgreSQL + Prisma ORM |
| Forms | React Hook Form |
| Deployment | Vercel |

---

## Project Structure

```
aapthi-website/
├── app/
│   ├── layout.js                  # Root layout (fonts, Navbar, Footer)
│   ├── page.jsx                   # Home page
│   ├── about/page.jsx             # About Us
│   ├── services/page.jsx          # Services
│   ├── projects/page.jsx          # Projects
│   ├── global-exposure/page.jsx   # Global Market Exposure
│   ├── industry-engagements/page.jsx
│   ├── awards/page.jsx            # Awards & Recognition
│   ├── team/page.jsx              # Team
│   ├── careers/page.jsx           # Careers
│   ├── contact/page.jsx           # Contact
│   ├── sitemap.js                 # Sitemap generator
│   └── api/
│       ├── contact/route.js       # POST contact form
│       ├── careers/apply/route.js # POST job application
│       ├── projects/route.js      # GET projects
│       └── awards/route.js        # GET awards
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx             # Sticky glassmorphism navbar
│   │   └── Footer.jsx             # Multi-column footer
│   └── ui/
│       ├── AnimatedCounter.jsx    # Count-up animation
│       ├── SectionHeader.jsx      # Gold-accented section titles
│       └── GlassmorphismCard.jsx  # Glass card wrapper
├── lib/
│   ├── utils.js                   # cn() utility
│   └── prisma.js                  # Prisma client singleton
├── prisma/
│   └── schema.prisma              # Database schema
├── public/
│   └── robots.txt
├── .env.example                   # Environment variables guide
├── jsconfig.json                  # Path aliases
└── next.config.js
```

---

## Getting Started

### 1. Clone & Install

```bash
cd aapthi-website
npm install
```

### 2. Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/aapthi_db"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

> **Without DATABASE_URL**: The site will run fully without a database. Contact and career forms will log to console instead of persisting to DB.

### 3. Database Setup (Optional)

If you have PostgreSQL running:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Services, Stats, Why Us, Awards, CTA |
| `/about` | About Us — Overview, Mission, Vision, Values, Timeline |
| `/services` | Services — IT Staffing, Software Dev, BPO, Construction |
| `/projects` | Projects — 5 digital transformation showcases |
| `/global-exposure` | Global Market Exposure — with disclaimer |
| `/industry-engagements` | Industry Engagements |
| `/awards` | Awards & Recognition — with disclaimer |
| `/team` | Team — 11 professional bios |
| `/careers` | Careers — openings, application form |
| `/contact` | Contact — form, map placeholder, info |

---

## Deployment on Vercel

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B: Vercel Dashboard

1. Push to GitHub/GitLab
2. Import project at [vercel.com](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_BASE_URL`
4. Deploy

### PostgreSQL on Vercel

Use **Vercel Postgres** (built-in) or **Supabase**:

```env
DATABASE_URL="postgres://..." # From Vercel/Supabase dashboard
```

Then run:

```bash
npx prisma generate
npx prisma db push
```

---

## Database Schema

```prisma
model ContactMessage   { id, name, email, phone, message, createdAt }
model CareerApplication { id, name, email, resumeUrl, position, createdAt }
model Project          { id, title, description, category, year }
model Award            { id, title, organization, category, description }
model AdminContent     { id, section, content, updatedAt }
```

---

## Production Optimization Tips

1. **Images**: Replace placeholder divs with `next/image` for optimized delivery
2. **Fonts**: Already using `next/font` for zero layout shift
3. **Components**: Add `loading.jsx` files for page-level skeleton loaders
4. **Email**: Integrate Nodemailer/Resend for real form email delivery
5. **Analytics**: Add Vercel Analytics (`@vercel/analytics`)
6. **SEO**: Update all metadata in each page's `export const metadata = {...}`
7. **Maps**: Replace the map placeholder with Google Maps embed using your actual address

---

## Disclaimer

> Company logos and names referenced on this site (Global Exposure, Awards pages) are for informational and demo purposes only. Aapthi Marketing Solutions has no formal partnership with any referenced organizations.

---

*Built with Next.js 14, Tailwind CSS, Framer Motion, and Prisma.*
