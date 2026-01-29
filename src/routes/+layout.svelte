<script lang="ts">
	import { resolve } from '$app/paths';

	import './layout.css';

	let { children } = $props();
</script>

<header class="fixed inset-x-0 top-0 z-10 border-b-2">
	<nav class="mx-auto flex h-24 max-w-5xl items-center justify-between px-4">
		<a href={resolve('/')}>
			<b>Tyler Woodruff</b>
		</a>

		<div class="flex items-center space-x-1">
			<a href={resolve('/')}>About</a>

			<a href={resolve('/')}>Contact</a>

			<a href={resolve('/')} target="_blank">RSS</a>
		</div>
	</nav>
</header>

<main class="mx-auto max-w-5xl pt-24">
	{@render children()}
</main>

<footer class="mx-auto max-w-5xl">
	<img
		src="/dolphin-swimming-animation.gif"
		alt="Dolphin"
		class=" mx-auto block max-w-full min-w-[50%]"
	/>
	<p>Tyler Woodruff &copy {new Date().getFullYear()}</p>
</footer>
