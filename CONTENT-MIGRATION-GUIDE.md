# Content Migration Guide - Kraft Studio Website

## 📋 Steps to Populate with Actual Content

### 1. Logo
**Location:** `src/components/Navigation.tsx`
- Line: `KRAFT STUDIO` text
- **Action:** Replace with actual logo image
- **From website:** Download logo from https://www.kraftstudio-mm.com/

```tsx
// Replace this:
<Link to="/" className="text-xl font-bold tracking-wider text-black">
  KRAFT STUDIO
</Link>

// With this:
<Link to="/" className="flex items-center">
  <img src="/path-to-logo.png" alt="Kraft Studio" className="h-8" />
</Link>
```

### 2. Hello Section (Hero)
**Location:** `src/components/Hero.tsx`
- **Current:** Generic welcome text
- **Action:** Copy the Burmese and English greeting from their website
- **From website:** Home page introduction section

Update lines:
- Main heading
- Description text
- Burmese greeting (if they have one)

### 3. Services Section
**Location:** `src/components/ServicesSection.tsx` and `src/data/projectsData.ts`

**From website:** Services page or home page services section

Copy:
- Service titles
- Service descriptions
- Service icons/images (if any)

### 4. Projects Data
**Location:** `src/data/projectsData.ts` and `src/pages/ProjectDetail.tsx`

**From website:** Projects page

For each project, copy:
- Project title
- Category (Residential/Hotels & Schools/Commercial)
- Location
- Year
- Description
- Client name
- Area (sqm)
- Status
- Images (hero image + gallery images)
- Features list

### 5. Clients Section
**Location:** `src/components/ClientsSection.tsx`

**From website:** Clients section (usually on home or about page)

Copy:
- Client logos (download images)
- Client names

### 6. About Section
**Location:** `src/pages/Home.tsx` - About section

**From website:** About page

Copy:
- Company description
- Philosophy text
- Statistics (years, projects, awards)

### 7. Contact Information
**Location:** `src/components/Footer.tsx`

**From website:** Contact page or footer

Copy:
- Email address
- Phone number
- Physical address
- Social media links

---

## 🎨 Image Assets Needed

### From Kraft Studio Website:

1. **Logo**
   - Format: PNG with transparent background
   - Size: Optimized for web
   - Save to: `public/logo.png`

2. **Project Images**
   - Hero images (1920x1080px)
   - Gallery images (800x600px)
   - Save to: `public/images/projects/`

3. **Client Logos**
   - Format: PNG or SVG
   - Save to: `public/images/clients/`

4. **Background Videos/Images**
   - Hero section background
   - Save to: `public/videos/` or `public/images/`

---

## 📝 Content Checklist

### Navigation
- [ ] Logo image
- [ ] Menu items (if different)

### Hero Section
- [ ] Main heading text
- [ ] Burmese greeting (if applicable)
- [ ] English welcome text
- [ ] Background video/image

### Services
- [ ] Service 1: Title + Description
- [ ] Service 2: Title + Description
- [ ] Service 3: Title + Description
- [ ] Service 4: Title + Description
- [ ] Service icons/images

### Projects (Minimum 6-9 projects)
For each project:
- [ ] Title
- [ ] Category
- [ ] Location
- [ ] Year
- [ ] Hero image
- [ ] Description
- [ ] Client name
- [ ] Area
- [ ] Status
- [ ] Gallery images (4-6 images)
- [ ] Features list

### Clients
- [ ] Client logos (6-12 logos)
- [ ] Client names

### About
- [ ] Company description
- [ ] Design philosophy
- [ ] Years in business
- [ ] Number of projects
- [ ] Number of awards
- [ ] Team size (if applicable)

### Footer
- [ ] Email
- [ ] Phone
- [ ] Address
- [ ] Instagram link
- [ ] LinkedIn link
- [ ] Facebook link (if applicable)

---

## 🔧 How to Update

### Example: Adding a Real Project

1. Open `src/data/projectsData.ts`
2. Replace placeholder with actual data:

```typescript
{
  id: 1,
  title: 'Actual Project Name from Website',
  category: 'Residential', // or 'Hotels & Schools' or 'Commercial'
  location: 'Yangon, Myanmar',
  year: '2024',
  image: '/images/projects/project-1-hero.jpg',
  description: 'Copy exact description from Kraft Studio website',
  client: 'Actual Client Name',
  area: '450 sqm',
  status: 'Completed',
  // Add more fields as needed
}
```

### Example: Adding Client Logos

1. Save client logos to `public/images/clients/`
2. Update `src/components/ClientsSection.tsx`:

```tsx
const clients = [
  { name: 'Client 1', logo: '/images/clients/client1.png' },
  { name: 'Client 2', logo: '/images/clients/client2.png' },
  // ... more clients
]

// Then in the component:
<img src={client.logo} alt={client.name} className="h-12 object-contain" />
```

---

## ⚠️ Important Notes

1. **Copyright:** Only use content you have permission to use
2. **Images:** Optimize all images for web (compress, resize)
3. **Text:** Proofread all copied text for accuracy
4. **Links:** Update all social media and contact links
5. **SEO:** Update meta tags with actual company information

---

## 🚀 Quick Start

1. Visit https://www.kraftstudio-mm.com/
2. Copy text content to a document
3. Download all images
4. Follow this guide to update each section
5. Test thoroughly before deployment

---

## 📞 Need Help?

If you need assistance with:
- Image optimization
- Content formatting
- Technical implementation

Please refer to the component files - they have TODO comments marking where to add content.
