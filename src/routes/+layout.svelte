<script lang="ts">
	import { resolve } from '$app/paths';
	import { title } from '$lib/config';

	import './layout.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-5xl">
	<div class="p-8 md:mx-24 md:my-8 md:border-2">
		<header class="pb-4">
			<nav class="mx-auto flex max-w-5xl items-center justify-between pb-2">
				<a href={resolve('/')} class="text-2xl font-semibold hover:underline">
					<b>tyle.rw</b>
				</a>

				<div class="flex items-center space-x-4">
					<button class="hover:underline" onclick={() => alert('Soon.')}>Resume</button>

					<button
						class="hover:underline"
						onclick={() => alert('aych aych aych tyler double yew at protonmail.com')}
						>Contact</button
					>

					<a class="hover:underline" href={resolve('/rss.xml')} target="_blank">RSS</a>
				</div>
			</nav>
		</header>
		{@render children()}
	</div>
</main>

<footer class="mx-auto max-w-5xl p-4">
	<img
		src="/dolphin-swimming-animation.gif"
		alt="Dolphin"
		class=" mx-auto block max-w-full min-w-[50%]"
	/>
	<p class="text-center">{title} &copy {new Date().getFullYear()}</p>
</footer>
