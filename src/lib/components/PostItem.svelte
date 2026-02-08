<script lang="ts">
	import { resolve } from '$app/paths';
	import type { MarkdownPostMetadataAndSlug, MarkdownPostType } from '$lib/types';
	
	let { post, postType }: { post: MarkdownPostMetadataAndSlug; postType: MarkdownPostType } = $props();
</script>

<article class="flex space-x-4 pb-0.5">
	<div class="block">
		<time datetime={post.metadata.date}>
			&gt;{post.metadata.date}
		</time>
	</div>
	<a href={resolve(`/${postType}/${post.slug}`)} class="hover:underline" style="color: aqua;"
		>{post.metadata.title}</a
	>
</article>
