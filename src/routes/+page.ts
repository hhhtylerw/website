import type { MarkdownPostMetadataAndSlug } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const blogResponse = await fetch('/blog/posts.json');
	const blogPosts: MarkdownPostMetadataAndSlug[] = await blogResponse.json();

	const photographyResponse = await fetch('/photography/posts.json');
	const photographyPosts: MarkdownPostMetadataAndSlug[] = await photographyResponse.json();

	return {
		blogPosts,
		photographyPosts
	};
};
