import type { BlogPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;

	const markdownPost: BlogPost = await import(`../../../lib/posts/blog/${slug}.md`);

	return {
		metadata: markdownPost.metadata,
		post: markdownPost.default
	};
};
