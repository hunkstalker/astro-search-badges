# 🔍 astro-search-badges

Beautiful search filter badges with Tab autocomplete for Astro + Pagefind.

![Demo](https://via.placeholder.com/800x400?text=Demo+Screenshot)

## ✨ Features

- 🎯 **Tab Autocomplete** - Type "ti" → Press Tab → Get "TIL" badge
- 🎨 **Colored Badges** - Visual category indicators (TIL/Projects/Blog)
- 🌍 **i18n Ready** - Multi-language support out of the box
- ⚡ **Fast Filtering** - Instant category-based search results
- 🎨 **Customizable** - Adapt colors, labels, and behavior
- ♿ **Accessible** - Keyboard navigation (Tab, Backspace, Delete, Escape)

## 📦 Installation

```bash
npm install astro-search-badges
# or
pnpm add astro-search-badges
# or
yarn add astro-search-badges
```

## 🚀 Quick Start

```astro
---
import SearchBadges from 'astro-search-badges'
---

<SearchBadges 
  filters={{
    til: { keys: ['til'], badge: 'TIL', color: 'emerald', filterType: 'til' },
    projects: { keys: { es: 'proyectos', en: 'projects' }, badge: 'PRO', color: 'blue', filterType: 'project' },
    blog: { keys: ['blog'], badge: 'DEV', color: 'purple', filterType: 'blog' }
  }}
  lang="en"
/>
```

## 📖 API Reference

### Props

```typescript
interface SearchBadgesProps {
  filters: Record<string, FilterConfig>  // Filter configurations
  lang: string                           // Current language code
  translations?: Translations            // Optional i18n translations
  placeholder?: string                   // Input placeholder (default: "Search...")
}

interface FilterConfig {
  keys: string[] | Record<string, string>  // Keywords to detect
  label: string                            // Display label or i18n key
  badge: string                            // Badge text (e.g., "TIL", "PRO")
  color: 'emerald' | 'blue' | 'purple'    // Badge color
  filterType: string                       // Filter value for your search backend
}
```

### Events

The component dispatches custom events you can listen to:

#### `searchInput`
Fired when user types in the input.

```javascript
input.addEventListener('searchInput', (e) => {
  const { value, activeFilter } = e.detail
  // value: current input text
  // activeFilter: active filter type or null
})
```

#### `badgeCreated`
Fired when a badge is created (Tab pressed).

```javascript
input.addEventListener('badgeCreated', (e) => {
  const { filterType, config } = e.detail
  // filterType: the filter type string
  // config: full FilterConfig object
})
```

#### `badgeRemoved`
Fired when a badge is removed.

```javascript
input.addEventListener('badgeRemoved', () => {
  // Re-run search without filter
})
```

### Public API

Access methods programmatically:

```javascript
const input = document.getElementById('search-badges-input')
const api = input.searchBadges

// Get active filter
const activeFilter = api.getActiveFilter()  // 'til' | 'project' | 'blog' | null

// Get active config
const config = api.getActiveConfig()  // FilterConfig | null

// Remove filter programmatically
api.removeFilter()

// Create filter programmatically
api.createFilter('til')  // Creates TIL badge
```

---

## 🔌 Integration Examples

### With Pagefind

```astro
---
import SearchBadges from 'astro-search-badges'

const filters = {
  til: { keys: ['til'], badge: 'TIL', color: 'emerald', filterType: 'til', label: 'TIL' }
}
---

<SearchBadges {filters} lang="en" />
<div id="results"></div>

<script>
  const input = document.getElementById('search-badges-input')
  const results = document.getElementById('results')
  
  input.addEventListener('searchInput', async (e) => {
    const { value, activeFilter } = e.detail
    
    // @ts-ignore
    const search = await window.pagefind.search(value)
    let data = await Promise.all(search.results.map(r => r.data()))
    
    // Apply filter if badge is active
    if (activeFilter) {
      data = data.filter(r => r.filters.type?.includes(activeFilter))
    }
    
    results.innerHTML = data.map(r => `<div>${r.content}</div>`).join('')
  })
</script>
```

### With Custom Search Backend

```astro
<script>
  const input = document.getElementById('search-badges-input')
  
  input.addEventListener('searchInput', async (e) => {
    const { value, activeFilter } = e.detail
    
    const response = await fetch(`/api/search?q=${value}&filter=${activeFilter || ''}`)
    const data = await response.json()
    
    // Render results...
  })
</script>
```

### Programmatic Control

```javascript
// Get input reference
const input = document.getElementById('search-badges-input')

// Create badge on page load
input.searchBadges.createFilter('til')

// Remove on button click
button.addEventListener('click', () => {
  input.searchBadges.removeFilter()
})

// Check current state
if (input.searchBadges.getActiveFilter() === 'til') {
  console.log('TIL filter is active')
}
```

## 🎨 Customization

### Custom Colors

Extend with your own Tailwind colors:

```astro
<SearchBadges 
  filters={{
    custom: {
      badge: 'NEW',
      color: 'rose', // Add custom color support
      // ...
    }
  }}
/>
```

### Styling

The component uses Tailwind utility classes. You can override them in your global CSS.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Autocomplete suggestion → Create badge |
| `Backspace` | Remove badge (when input is empty) |
| `Delete` | Clear input and remove badge |
| `Escape` | Close search |

## 🤝 Requirements

- **Astro** ^5.0.0
- **Pagefind** (for search indexing)
- **Tailwind CSS** (for styling)

## 📝 License

MIT © [Denis Anfruns](https://github.com/hunkstalker)

## 🙏 Credits

Created by [@hunkstalker](https://github.com/hunkstalker) for use in modern Astro projects.

---

**[⭐ Star on GitHub](https://github.com/hunkstalker/astro-search-badges)** if you find this useful!
