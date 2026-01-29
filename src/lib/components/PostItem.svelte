<script lang="ts">
	import { resolve } from '$app/paths';
	import type { MarkdownPostMetadataAndSlug } from '$lib/types';

	let { post }: { post: MarkdownPostMetadataAndSlug } = $props();
</script>

<article class="p-4 sm:flex sm:space-x-4">
	<a href={resolve(`/posts/${post.slug}`)} class="block sm:w-80">
		<div class="aspect-w-16 overflow-hidden rounded-lg aspect-h-9">
			<img src={post.metadata.image} alt={post.metadata.title} class="object-cover" />
		</div>
	</a>

	<div class="flex-1 py-2 sm:py-0">
		<a href={resolve(`/posts/${post.slug}`)}>
			<h3 class="mb-1 text-xl font-medium">
				{post.metadata.title}
			</h3>
			<p class="text-gray-60 font-light">
				<time datetime={post.metadata.date}>
					{post.metadata.date}
				</time>
			</p>

			<p class="py-2 font-light">
				{post.metadata.description}
			</p>
		</a>

		<div class="flex space-x-4 font-light text-gray-600 hover:underline">
			<a href={resolve(`/posts/${post.slug}`)} style="color: aqua;">>>Read More</a>
		</div>
	</div>
</article>
