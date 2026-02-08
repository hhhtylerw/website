import type { BlogPostMetadataAndSlug } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// get posts from api with sveltekit special fetch
	const response = await fetch('/posts');

	// get posts from response
	const posts: BlogPostMetadataAndSlug[] = await response.json();

	return {
		posts
	};
};
