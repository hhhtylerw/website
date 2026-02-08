import type { Component } from 'svelte';

export type BlogPost = {
	slug: string;
	metadata: {
		title: string;
		image: string;
		description: string;
		date: string;
	};
	default: Component;
};

export type BlogPostMetadataAndSlug = {
	slug: string;
	metadata: BlogPost['metadata'];
};
