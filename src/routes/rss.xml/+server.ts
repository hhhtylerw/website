import * as config from '$lib/config';
import type { MarkdownPostMetadataAndSlug } from '$lib/types';

export const prerender = true;

export async function GET({ fetch }) {
	const blogResponse = await fetch('/blog/posts.json');
	const photographyResponse = await fetch('/photography/posts.json');

	const blogPosts: MarkdownPostMetadataAndSlug[] = await blogResponse.json();
	const photographyPosts: MarkdownPostMetadataAndSlug[] = await photographyResponse.json();

	const posts = [...blogPosts, ...photographyPosts].sort((a, b) => 
		new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.metadata.title}</title>
							<description>${post.metadata.description}</description>
							<link>${config.url}/${post.slug}</link>
							<guid isPermaLink="true">${config.url}/${post.slug}</guid>
							<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
