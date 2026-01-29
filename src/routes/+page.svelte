<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="pb-6">
	<header class="mx-4 mb-4 inline-block py-2">
		<h2 class="text-3xl font-semibold">Blog Posts</h2>
	</header>

	<section class="divide-y-2">
		{#each data.posts as post (post.slug)}
			<PostItem {post} />
		{/each}
	</section>
</section>
