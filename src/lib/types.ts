import type { Component } from 'svelte';

export type MarkdownPostType = 'blog' | 'photography';

export type MarkdownPost = {
	slug: string;
	metadata: {
		title: string;
		image: string;
		images: string[];
		description: string;
		date: string;
	};
	default: Component;
};

export type MarkdownPostMetadataAndSlug = {
	slug: string;
	metadata: MarkdownPost['metadata'];
};
