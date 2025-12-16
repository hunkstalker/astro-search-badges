/// <reference types="astro/client" />

interface PagefindResult {
	id: string
	data: () => Promise<any>
	url: string
	content: string
	excerpt: string
	filters: Record<string, string[]>
	meta: {
		title: string
		image: string
	}
	anchors: {
		element: string
		id: string
		text: string
		location: number
	}[]
	weighted_locations: {
		weight: number
		balanced_score: number
		location: number
	}[]
	locations: number[]
	raw_content: string
	raw_url: string
	score: number
	sub_results: {
		title: string
		url: string
		locations: number[]
		excerpt: string
	}[]
	word_count: number
	language: string
}

interface Pagefind {
	search: (query: string) => Promise<{ results: PagefindResult[] }>
	options: (options: any) => void
}

interface Window {
	pagefind: Pagefind
}
