import type { Component } from 'svelte';

export type MarkdownPost = {
	metadata: {
		title: string;
		imageUrl: string;
		description: string;
		date: string;
	};
	default: Component;
};
