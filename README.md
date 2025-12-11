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

## 📖 Usage

### Basic Example

```astro
---
import SearchBadges from 'astro-search-badges'

const filters = {
  til: {
    keys: ['til'],
    label: 'Today I Learned',
    badge: 'TIL',
    color: 'emerald',
    filterType: 'til'
  }
}
---

<SearchBadges {filters} lang="en" />
```

### With i18n

```astro
---
import SearchBadges from 'astro-search-badges'

const filters = {
  projects: {
    keys: { es: 'proyectos', en: 'projects', ca: 'projectes' },
    label: 'nav.projects', // i18n key
    badge: 'PRO',
    color: 'blue',
    filterType: 'project'
  }
}

const translations = {
  en: { 'nav.search': 'Search...', 'nav.search.in': 'in' },
  es: { 'nav.search': 'Buscar...', 'nav.search.in': 'en' }
}
---

<SearchBadges {filters} lang="en" {translations} />
```

## ⚙️ Configuration

### Filter Object

```typescript
interface FilterConfig {
  keys: string[] | Record<string, string>  // Keywords to detect
  label: string                            // Display label or i18n key
  badge: string                            // Badge text (e.g., "TIL", "PRO")
  color: 'emerald' | 'blue' | 'purple'    // Badge color
  filterType: string                       // Pagefind filter value
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `filters` | `Record<string, FilterConfig>` | ✅ | Filter configurations |
| `lang` | `string` | ✅ | Current language code |
| `translations` | `Record<string, Record<string, string>>` | ❌ | i18n translations |

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
