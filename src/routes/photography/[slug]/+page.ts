import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const markdownPost: MarkdownPost = await import(`../../../lib/posts/photography/${slug}.md`);

	return {
		metadata: markdownPost.metadata,
		post: markdownPost.default
	};
};
