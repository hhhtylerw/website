<script lang="ts">
	import { resolve } from '$app/paths';
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
	<div class="prose max-w-none pb-4">
		<data.post />
	</div>

	<div class="flex flex-wrap justify-center gap-2">
		{#each data.metadata.images as image (image)}
			<div class="group relative">
				<a href={resolve(`/photography/photos/${data.metadata.date}/${image}`)} target="_blank">
					<img
						src={`/photography/photos/${data.metadata.date}/${image}`.replace('.', '_thumb.')}
						alt=""
						class="h-[171px] w-[228px] object-cover"
					/>
					<div
						class="absolute inset-0 flex items-center justify-center bg-black/50 text-sm text-white opacity-0 group-hover:opacity-100"
					>
						Click to enlarge
					</div>
				</a>
			</div>
		{/each}
	</div>
</article>
