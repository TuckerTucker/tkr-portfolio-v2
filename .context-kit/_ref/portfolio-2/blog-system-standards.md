# Blog System Standards

**Portfolio Project:** tkr-portfolio-v2
**Created:** 2025-01-23
**Purpose:** Reference documentation for blog content creation and management

---

## Overview

The blog system is a simple, file-based content management solution with no CMS, no publishing dates, and markdown-rendered articles. Articles are stored as TypeScript data with support for images, tags, LinkedIn embeds, and rich content.

---

## Content Type Definition

### BlogArticle Interface

Located in: `src/content/types.ts`

```typescript
export interface BlogArticle {
  id: string              // Unique numeric identifier
  slug: string            // URL-friendly slug (e.g., 'designing-for-ai-agents')
  title: string           // Article title
  description: string     // Short description/tagline
  content: string[]       // Array of content paragraphs (markdown-supported)
  tags?: string[]         // Optional categorization tags
  linkedinUrl?: string    // Optional LinkedIn post URL (for fallback link)
  linkedinEmbed?: string  // Optional LinkedIn embed iframe URL
  image?: string          // Optional hero/thumbnail image URL
  imageAlt?: string       // Optional alt text for image (accessibility)
}
```

---

## File Structure

```
src/
├── content/
│   ├── blog/
│   │   └── articles.ts        # All blog articles defined here
│   └── types.ts               # BlogArticle interface
├── pages/
│   ├── Blog.tsx               # Blog index page (article list)
│   └── BlogArticle.tsx        # Individual article page
└── App.tsx                    # Routes: /blog and /blog/:slug
```

---

## Creating Blog Articles

### Basic Article Template

```typescript
{
  id: '1',
  slug: 'article-url-slug',
  title: 'Article Title',
  description: 'Brief description that appears in cards and meta tags',
  content: [
    'First paragraph of content. Can include markdown.',
    '',
    '## Section Heading',
    '',
    'More content with **bold** and *italic* formatting.',
    '',
    '- Bullet point one',
    '- Bullet point two',
    '',
    '```typescript',
    'const example = "code block";',
    '```',
  ],
  tags: ['Tag 1', 'Tag 2', 'Category'],
}
```

### Article with Image

```typescript
{
  id: '2',
  slug: 'article-with-image',
  title: 'Article with Hero Image',
  description: 'Example showing image support',
  content: ['Article content...'],
  tags: ['Design', 'UX'],
  image: '/images/blog/hero-image.jpg',
  imageAlt: 'Descriptive alt text for accessibility',
}
```

### Article with LinkedIn Embed

```typescript
{
  id: '3',
  slug: 'article-with-linkedin',
  title: 'Article with LinkedIn Post',
  description: 'Example showing LinkedIn integration',
  content: ['Article content...'],
  tags: ['Social'],
  linkedinUrl: 'https://www.linkedin.com/posts/username_post-url',
  linkedinEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:123?collapsed=1',
}
```

---

## Content Formatting Standards

### Markdown Support

Content arrays support full markdown syntax via `react-markdown`:

- **Headings:** `## Heading` (use ## for sections, ### for subsections)
- **Bold:** `**bold text**`
- **Italic:** `*italic text*`
- **Links:** `[link text](https://url.com)`
- **Lists:**
  - Unordered: `- item`
  - Ordered: `1. item`
- **Code blocks:** Triple backticks with language identifier
  ```
  ```typescript
  const code = "example";
  ```
  ```
- **Inline code:** `` `code` ``
- **Blockquotes:** `> quote text`

### Content Structure Best Practices

1. **Paragraph separation:** Use empty strings (`''`) between paragraphs
2. **Section headers:** Start with `##` (h2), use `###` for subsections
3. **Code examples:** Always specify language for syntax highlighting
4. **Lists:** Add empty line before and after lists
5. **Consistency:** Maintain consistent heading hierarchy

### Example Well-Formatted Content

```typescript
content: [
  'Opening paragraph introducing the topic.',
  '',
  '## Main Section',
  '',
  'First paragraph of the section with **emphasis** on key points.',
  '',
  'Second paragraph continuing the discussion.',
  '',
  '**Key Principle:**',
  'Explanation of the principle.',
  '',
  '## Code Example',
  '',
  '```typescript',
  'interface Example {',
  '  field: string',
  '}',
  '```',
  '',
  'Explanation of the code.',
],
```

---

## Image Guidelines

### Supported Image Types

- **Hero Images:** Full-width banner at top of article
- **Thumbnail Images:** Card preview on blog index page

### Image Specifications

**Hero Image (Article Page):**
- Aspect ratio: 21:9 (ultra-wide)
- Recommended size: 2100×900px minimum
- Format: JPG, PNG, WebP
- File size: Keep under 500KB (optimize for web)

**Thumbnail Image (Index Card):**
- Aspect ratio: 16:9
- Recommended size: 1200×675px minimum
- Format: JPG, PNG, WebP
- File size: Keep under 300KB

### Image Placement Options

1. **Public folder:** `/public/images/blog/filename.jpg`
   - Reference: `image: '/images/blog/filename.jpg'`
   - Best for assets committed to repo

2. **External URL:** `https://cdn.example.com/image.jpg`
   - Reference: `image: 'https://cdn.example.com/image.jpg'`
   - Best for CDN-hosted images

### Accessibility Requirements

**Always provide alt text:**
```typescript
image: '/images/blog/article-hero.jpg',
imageAlt: 'Descriptive text explaining the image content',
```

**Alt text guidelines:**
- Describe the content and context of the image
- Keep under 125 characters when possible
- Don't start with "Image of" or "Picture of"
- Be specific and informative
- Consider screen reader users

---

## LinkedIn Integration

### Getting LinkedIn Embed Code

1. Navigate to your LinkedIn post
2. Click the three dots menu (⋯) on the post
3. Select "Embed"
4. Copy the iframe code provided
5. Extract the `src` URL from the iframe

### LinkedIn Embed Format

```typescript
linkedinUrl: 'https://www.linkedin.com/posts/username_post-activity-123-abcd',
linkedinEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:123?collapsed=1',
```

**Important Parameters:**
- `urn:li:ugcPost:` - User-generated content post identifier
- `?collapsed=1` - Initial collapsed state parameter

### Embed Behavior

1. **If `linkedinEmbed` exists:** Displays iframe embed with fallback link
2. **If only `linkedinUrl` exists:** Shows LinkedIn card with "Open Post" button
3. **Iframe specs:** 504px width, 895px height, responsive with max-width

### Fallback Pattern

The implementation always provides a fallback link below the embed:
```
"If the embed doesn't load, view on LinkedIn"
```

This handles CSP restrictions or loading issues gracefully.

---

## Routing and URLs

### Route Configuration

Located in: `src/App.tsx`

```typescript
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogArticle />} />
```

### URL Structure

- **Blog index:** `https://tucker.sh/blog`
- **Individual article:** `https://tucker.sh/blog/article-slug`

### Slug Requirements

- Lowercase letters, numbers, hyphens only
- No spaces or special characters
- Must be unique across all articles
- Should be descriptive and SEO-friendly

**Good slugs:**
- `designing-for-ai-agents`
- `file-based-architectures`
- `mcp-integration-patterns`

**Bad slugs:**
- `Article_1` (underscore, not descriptive)
- `My Great Post!!!` (spaces, special characters)
- `post` (too generic)

---

## Styling and Design Patterns

### Blog Index Page

**Card Layout:**
- Grid layout with consistent gap spacing
- Hover effects: scale up (1.01), enhanced shadow
- Image hover: scale up (1.05) with smooth transition
- Responsive: single column mobile, grid on larger screens

**Card Components:**
- Hero image (if present) - 16:9 aspect ratio
- Title - 2xl text, primary color on hover
- Description - base text, muted foreground
- Tags - small badges with border, muted background

### Article Page

**Layout Structure:**
1. Breadcrumbs (Blog > Article Title)
2. Back button (ghost variant)
3. Hero image (if present) - 21:9 aspect ratio
4. Article header (title, description, tags)
5. Article content (prose styling)
6. LinkedIn embed (if present)
7. Back button footer (outline variant)

**Typography (Prose):**
- Base: `prose-lg`
- Theme: `prose-slate` light, `prose-invert` dark
- Max width: `max-w-4xl` centered container

### Color Tokens Used

- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `text-primary` - Links and interactive elements
- `bg-background` - Main background
- `bg-muted` - Subtle backgrounds
- `bg-secondary` - Card accents
- `border` - Standard borders

---

## Component Architecture

### Blog.tsx (Index Page)

**Responsibilities:**
- List all blog articles
- Display article cards with images, titles, descriptions, tags
- Link to individual articles
- Responsive grid layout

**Key Features:**
- Article mapping with `blogArticles.map()`
- React Router `Link` components for navigation
- Shadcn Card components for consistent styling
- Conditional image rendering

### BlogArticle.tsx (Article Page)

**Responsibilities:**
- Display single article content
- Render markdown content
- Show hero image (if present)
- Embed LinkedIn content (if present)
- Provide navigation (breadcrumbs, back buttons)

**Key Features:**
- URL params extraction: `useParams<{ slug: string }>()`
- Article lookup by slug
- Markdown rendering via ReactMarkdown
- 404 handling for missing articles
- LinkedIn iframe embed with fallback
- Responsive prose styling

**Navigation Flow:**
```
/blog → Click article → /blog/slug
/blog/slug → Click "Back to Blog" → /blog
/blog/slug → Click breadcrumb "Blog" → /blog
```

---

## Tag System

### Tag Guidelines

**Categories:**
- Technical topics: `AI UX`, `MCP`, `Architecture`, `RAG`
- Content types: `Tutorial`, `Case Study`, `Reflection`
- Technologies: `React`, `TypeScript`, `Node.js`
- Concepts: `Design Systems`, `Developer Tools`, `People-AI Collaboration`

**Best Practices:**
- Use 2-4 tags per article
- Be specific but not overly granular
- Maintain consistency across articles
- Consider tag reuse for discoverability
- Use Title Case for multi-word tags

**Tag Display:**
- Small badges with border
- Muted background color
- Responsive wrapping
- Consistent spacing

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

**Images:**
- ✅ All images must have `alt` text
- ✅ Alt text must be descriptive and contextual
- ✅ Decorative images should have empty alt (`alt=""`)

**Navigation:**
- ✅ Breadcrumbs use proper semantic markup
- ✅ Links have descriptive text (no "click here")
- ✅ Back buttons have clear labels
- ✅ Keyboard navigation fully supported

**Content:**
- ✅ Headings maintain proper hierarchy (h1 → h2 → h3)
- ✅ Text contrast meets WCAG AA standards
- ✅ Interactive elements have visible focus states
- ✅ LinkedIn embeds have descriptive `title` attributes

**Color Contrast:**
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

---

## Performance Optimization

### Image Optimization

**Recommended workflow:**
1. Resize images to recommended dimensions
2. Compress with tools like TinyPNG, ImageOptim
3. Convert to modern formats (WebP) with fallbacks
4. Use responsive `srcset` for multiple sizes (future enhancement)

**Loading Strategy:**
- Images use browser-native lazy loading
- `object-cover` prevents layout shift
- Aspect ratio containers reserve space

### Content Delivery

**Current approach:**
- All articles bundled in JavaScript
- Client-side rendering with React
- React Router for instant navigation
- No server-side rendering (yet)

**Future considerations:**
- Image CDN for external hosting
- Static site generation for blog pages
- Service worker for offline reading
- Progressive web app features

---

## Writing Guidelines

### Voice and Tone

Refer to: `.context-kit/_ref/portfolio-2/tkr-voice-style-playbook.md`

**Key principles:**
- Professional but approachable
- Technical but not jargon-heavy
- Educational with concrete examples
- First-person for personal experiences
- Direct and honest

### Content Structure

**Recommended article flow:**
1. **Opening** (1-2 paragraphs)
   - Hook the reader
   - State the problem or topic
   - Preview what they'll learn

2. **Body** (3-5 sections)
   - Break into logical sections with h2 headers
   - Use examples and code snippets
   - Include visuals when relevant
   - Maintain clear progression

3. **Conclusion** (1-2 paragraphs)
   - Summarize key takeaways
   - Connect to broader themes
   - Optional: call to action or next steps

### Length Guidelines

- **Short posts:** 500-800 words (quick insights, updates)
- **Standard posts:** 800-1500 words (most articles)
- **Deep dives:** 1500-3000 words (technical tutorials, case studies)

---

## SEO Considerations

### Meta Information

**Title:**
- Article title becomes page title
- Keep under 60 characters for search results
- Front-load important keywords

**Description:**
- Article description used for meta description
- Keep under 155 characters
- Should entice clicks from search results
- Include primary keyword naturally

**URLs:**
- Clean, descriptive slugs
- Hyphens separate words
- No stop words (the, a, an) when possible
- Permanent - don't change after publishing

### Content Best Practices

- Use headings (h2, h3) for structure
- Include relevant keywords naturally
- Link to related articles (internal linking)
- Use descriptive link text
- Optimize images with alt text and file names

---

## Version Control

### Git Workflow

**Adding new articles:**
```bash
# Edit src/content/blog/articles.ts
# Add images to public/images/blog/ if needed
git add src/content/blog/articles.ts
git add public/images/blog/new-image.jpg  # if applicable
git commit -m "feat(blog): add article about [topic]"
```

**Updating articles:**
```bash
git add src/content/blog/articles.ts
git commit -m "fix(blog): update [article-slug] content"
```

### Commit Message Format

Follow conventional commits:
- `feat(blog):` - New article or major feature
- `fix(blog):` - Corrections, typos, small updates
- `refactor(blog):` - Restructuring without content changes
- `style(blog):` - Formatting, images, visual updates

---

## Testing Checklist

Before publishing a new article:

### Content Review
- [ ] Title is clear and compelling
- [ ] Description is accurate and under 155 characters
- [ ] Slug is descriptive and unique
- [ ] All markdown renders correctly
- [ ] Code blocks have language identifiers
- [ ] Links work and open in new tabs where appropriate
- [ ] Tags are relevant and consistent

### Image Review (if applicable)
- [ ] Image displays correctly on index page
- [ ] Hero image displays on article page
- [ ] Alt text is descriptive and accurate
- [ ] Images are optimized for web
- [ ] Images load quickly

### LinkedIn Review (if applicable)
- [ ] Embed URL is correct
- [ ] Iframe loads properly
- [ ] Fallback link works
- [ ] Embed displays on production domain

### Functionality Testing
- [ ] Article appears on blog index
- [ ] Article link navigates correctly
- [ ] Breadcrumbs work
- [ ] Back buttons return to index
- [ ] Mobile responsive
- [ ] Dark mode displays correctly

### Accessibility Testing
- [ ] All images have alt text
- [ ] Heading hierarchy is logical
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Links are descriptive

### Build Testing
```bash
npm run build  # Must complete without errors
```

---

## Troubleshooting

### Common Issues

**Article not appearing on index:**
- Check that article is added to `blogArticles` array
- Verify `id` is unique
- Ensure no TypeScript errors

**Image not loading:**
- Verify path is correct (starts with `/` for public folder)
- Check image exists in `/public` directory
- Ensure image file extension matches reference
- Check browser console for 404 errors

**LinkedIn embed not working:**
- Verify embed URL format matches LinkedIn's
- Check for CSP errors in console
- Test on production domain (may not work on localhost)
- Ensure `linkedinUrl` fallback is present

**Markdown not rendering:**
- Check for proper empty lines between paragraphs
- Verify heading syntax (`##` with space)
- Test code block backticks (three on each side)
- Review ReactMarkdown documentation

**404 on article page:**
- Ensure slug in URL matches article slug exactly
- Check for typos in slug
- Verify route is configured in App.tsx

---

## Future Enhancements

### Planned Features
- [ ] Article search functionality
- [ ] Tag filtering on index page
- [ ] Related articles recommendations
- [ ] Reading time estimates
- [ ] Social share buttons
- [ ] RSS feed generation
- [ ] Newsletter signup integration

### Content Improvements
- [ ] Syntax highlighting themes
- [ ] Custom markdown components
- [ ] Image galleries
- [ ] Video embeds (YouTube, Vimeo)
- [ ] Interactive code examples
- [ ] Table of contents for long articles

### Performance
- [ ] Image lazy loading optimization
- [ ] Static generation for blog routes
- [ ] Content preloading
- [ ] Service worker caching

---

## Reference Files

Related documentation:
- `tkr-voice-style-playbook.md` - Writing voice and tone guidelines
- `01_portfolio-priorities.md` - Portfolio content strategy
- `portfolio_narrative_three_projects.md` - Narrative framework
- Case study files - Content structure examples

---

## Quick Reference

### Add New Article

```typescript
// In src/content/blog/articles.ts
export const blogArticles: BlogArticle[] = [
  {
    id: 'NEXT_NUMBER',
    slug: 'descriptive-url-slug',
    title: 'Article Title',
    description: 'Brief description under 155 characters',
    content: [
      'Opening paragraph.',
      '',
      '## First Section',
      '',
      'Content goes here.',
    ],
    tags: ['Tag1', 'Tag2'],
    image: '/images/blog/article-image.jpg',
    imageAlt: 'Descriptive alt text',
  },
  // ... existing articles
]
```

### URLs
- Index: `http://localhost:5173/blog`
- Article: `http://localhost:5173/blog/article-slug`

### Build Command
```bash
npm run build
```

### Dev Server
```bash
npm run dev
```

---

**Last Updated:** 2025-01-23
**Maintained By:** Sean 'Tucker' Harley
**Questions?** Refer to inline code comments or portfolio documentation
