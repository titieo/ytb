<script>
import { fly } from 'svelte/transition';
export let show = false;
</script>

{#if show}
  <nav transition:fly={{x: -250, opacity: 1}}>
    <button on:click={() => { show = false;}}>About</button>
  </nav>
{/if}

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow-y: auto;
	width: 10rem;
}
</style>
