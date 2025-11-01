# Image Guidelines for Portfolio Projects

## Featured Project Images

### Optimal Dimensions

**Recommended sizes:**
- **Minimum:** 800x450px (16:9 aspect ratio)
- **Ideal:** 1000x563px (16:9) or 1000x500px (2:1)
- **Maximum effective height:** 400px (layout constraint)

### Aspect Ratios

**Best aspect ratios for Featured Projects:**

1. **16:9 (landscape)** - Most versatile
   - Examples: 800x450px, 1000x563px, 1200x675px
   - Best for: UI screenshots, dashboard views, web interfaces
   - Natural viewing experience

2. **2:1 (wide landscape)** - More horizontal
   - Examples: 800x400px, 1000x500px, 1200x600px
   - Best for: Wide application views, multi-panel interfaces
   - Gives text content more breathing room

3. **Avoid:** Portrait or square images
   - Will be heavily cropped due to max-height constraint
   - Won't utilize available horizontal space

### Technical Specifications

**Layout constraints:**
- Max width: 66.666% of card container (~600-800px on desktop)
- Max height: 400px
- Behavior: `object-cover` (crops to fit, maintains aspect ratio)
- Position: Can be left or right of text content

**File format:**
- **PNG:** Best for UI screenshots with text/sharp edges
- **WebP:** Best compression with quality (modern browsers)
- **JPG:** Acceptable for photographic content
- **Target file size:** Under 200KB for optimal performance

**Responsive behavior:**
- Mobile: Images stack vertically (full width)
- Desktop (md+): Images display side-by-side with content at max 2/3 width

### Image Positioning

Images can be positioned left or right via the `imagePosition` field:

```typescript
{
  image: '/images/project-screenshot.png',
  imageAlt: 'Descriptive alt text for accessibility',
  imagePosition: 'left' // or 'right' (defaults to 'right')
}
```

### Content Guidelines

**What makes a good project image:**
- Clear, readable UI elements
- Representative of the project's core functionality
- High contrast for visibility in both light/dark modes
- Meaningful content (avoid Lorem Ipsum or placeholder text)
- Professional quality (no browser chrome, clean screenshots)

**Accessibility:**
- Always include descriptive `imageAlt` text
- Alt text should describe what's shown, not just repeat the title
- Example: "DocuSearch interface showing dual browsing and search panels"

### File Organization

**Recommended structure:**
```
public/images/
  projects/
    docusearch/
      hero.png          (1000x563px, 16:9)
      screenshot-1.png
      screenshot-2.png
    taskboardai/
      hero.png          (1000x500px, 2:1)
      kanban-view.png
    context-kit/
      hero.png
      dashboard.png
```

### Quick Reference

| Image Type | Width | Height | Aspect | Use Case |
|------------|-------|--------|--------|----------|
| Standard UI | 1000px | 563px | 16:9 | Most screenshots |
| Wide Dashboard | 1000px | 500px | 2:1 | Multi-panel UIs |
| High-res UI | 1200px | 675px | 16:9 | Retina displays |
| Minimum acceptable | 800px | 450px | 16:9 | Small file size |

### Implementation Example

```typescript
// In src/content/projects.ts
{
  id: 'docusearch',
  title: 'DocuSearch',
  // ... other fields ...
  image: '/images/projects/docusearch/hero.png',
  imageAlt: 'DocuSearch interface showing document browser on left and semantic search results on right',
  imagePosition: 'right'
}
```

### Notes

- Images use CSS `object-cover` which crops to fit while maintaining aspect ratio
- Tall images (portrait orientation) will be heavily cropped - use landscape only
- Consider both light and dark mode when choosing screenshots
- Test images on mobile viewport to ensure they work when stacked vertically
