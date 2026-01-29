<script lang="ts">
	import CheckIcon from './svg/CheckIcon.svelte';
	import CopyIcon from './svg/CopyIcon.svelte';

	let copyButton: HTMLButtonElement;
	let showCheckmark = $state(false);

	function handleClick() {
		const preTagSibling = copyButton.nextElementSibling as HTMLPreElement;

		navigator.clipboard.writeText(preTagSibling.innerText);

		showCheckmark = true;

		setTimeout(() => (showCheckmark = false), 1000);
	}
</script>

<button
	bind:this={copyButton}
	class={`absolute top-2 right-2 rounded-md p-1 shadow-md ${showCheckmark ? 'bg-green-900' : 'bg-gray-700 hover:bg-gray-600'}`}
	onclick={handleClick}
>
	{#if showCheckmark}
		<CheckIcon />
	{:else}
		<CopyIcon />
	{/if}
</button>
