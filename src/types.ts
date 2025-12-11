/**
 * Configuration for a search filter badge
 */
export interface FilterConfig {
	/** Keywords to detect (string[] or Record<lang, keyword>) */
	keys: string[] | Record<string, string>
	/** Display label or i18n translation key */
	label: string
	/** Short badge text (e.g., "TIL", "PRO", "DEV") */
	badge: string
	/** Badge color theme */
	color: 'emerald' | 'blue' | 'purple' | string
	/** Pagefind filter type value */
	filterType: string
}

/**
 * i18n translations object
 */
export type Translations = Record<string, Record<string, string>>

/**
 * Props for SearchBadges component
 */
export interface SearchBadgesProps {
	/** Filter configurations */
	filters: Record<string, FilterConfig>
	/** Current language code */
	lang: string
	/** Optional i18n translations */
	translations?: Translations
	/** Placeholder text override */
	placeholder?: string
}

/**
 * Current suggestion state
 */
export interface Suggestion {
	keyword: string
	config: FilterConfig
}
