<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="space-y-0.5 pb-4">
	<h3 class="pb-1 text-lg">About</h3>
	<div>I'm Tyler and this is my website. I work as a software engineer at &lt???&gt;.</div>
	<div>This site will contain posts about work I've done and things that interest me.</div>
</section>

<section>
	<h3 class="pb-1 text-lg">Blog</h3>
	{#each data.posts as post (post.slug)}
		<PostItem {post} />
	{/each}
</section>
