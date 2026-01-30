<script lang="ts">
	import { resolve } from '$app/paths';
	import type { MarkdownPostMetadataAndSlug } from '$lib/types';

	let { post }: { post: MarkdownPostMetadataAndSlug } = $props();
</script>

<article class="flex space-x-4 pb-0.5">
	<div class="block">
		<time datetime={post.metadata.date}>
			&gt;{post.metadata.date}
		</time>
	</div>
	<a href={resolve(`/posts/${post.slug}`)} class="hover:underline" style="color: aqua;"
		>{post.metadata.title}</a
	>
</article>
