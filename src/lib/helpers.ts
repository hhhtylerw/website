import type { MarkdownPostMetadataAndSlug, MarkdownPostType } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function getPosts(postsType: MarkdownPostType) {
	// use vite glob import to get all markdown posts
	let markdownPostModules;

	if (postsType === 'blog') {
		markdownPostModules = import.meta.glob('/src/lib/posts/blog/*') as Record<
			string,
			() => Promise<MarkdownPostMetadataAndSlug>
		>;
	} else {
		markdownPostModules = import.meta.glob('/src/lib/posts/photography/*') as Record<
			string,
			() => Promise<MarkdownPostMetadataAndSlug>
		>;
	}

	console.log(postsType, markdownPostModules);

	const postPromises: Promise<MarkdownPostMetadataAndSlug>[] = [];

	for (const path in markdownPostModules) {
		const loadMarkdownPostModule = markdownPostModules[path];

		const loadPostSlugAndMetadata = async function () {
			// dynamically import markdown post
			const markdownPostModule = await loadMarkdownPostModule();

			// slug is everything after last / without the file extension
			const slug = path.slice(path.lastIndexOf('/') + 1).replace('.md', '');

			return {
				slug,
				metadata: markdownPostModule.metadata
			};
		};

		postPromises.push(loadPostSlugAndMetadata());
	}

	// load all posts concurrently
	const posts = await Promise.all(postPromises);

	// sort by publication date (descending/most recent first)
	const sortedPosts = posts.sort((post1, post2) => {
		return new Date(post2.metadata.date).getTime() - new Date(post1.metadata.date).getTime();
	});

	return json(sortedPosts);
}
