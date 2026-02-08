<script lang="ts">
	import '$lib/prism-theme.css';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<article>
	<header>
		<div>
			<h1 class="text-3xl font-bold">
				{data.metadata.title}
			</h1>

			<div class="inline-block py-2">
				<time datetime={data.metadata.date} class="font-light">
					&gt;{data.metadata.date}
				</time>
			</div>
		</div>
	</header>
	<div class="prose max-w-none">
		<data.post />
	</div>

	<div class="flex flex-wrap justify-center gap-2">
		{#each data.metadata.images as image (image)}
			<img src={image} alt="" class="h-[171px] w-[228px] object-cover" />
		{/each}
	</div>
</article>
