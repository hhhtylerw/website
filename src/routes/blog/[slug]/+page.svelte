<script lang="ts">
	import './prism-theme.css';
	import type { PageProps } from './$types';
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';

	let { data }: PageProps = $props();
</script>

<article>
	<header>
		<div class="mb-6 w-full sm:w-3/5">
			<div class="aspect-w-16 rounded-lg aspect-h-9">
				<img src={data.metadata.image} alt={data.metadata.title} class="object-cover" />
			</div>
		</div>

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
		<CopyCodeInjector>
			<data.post />
		</CopyCodeInjector>
	</div>
</article>
