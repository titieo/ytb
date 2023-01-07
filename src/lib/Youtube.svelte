<script>
  import Button from "./ytb/Button.svelte";
  import Iframe from "./ytb/Iframe.svelte";
  import Image from "./ytb/Image.svelte";

  export let id = null;
  export let altThumb = false;

  let videoInfo = {};

  videoInfo = fetch(
    `//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
  ).then((res) => res.json());

  let play = false;
  const isCustomPlayButton = $$slots.default;
</script>

{#await videoInfo then { title, width, height }}
  <div
    class="you__tube"
    style="--aspect-ratio:{width / height || '16/9'}"
    {title}
  >
    {#if play}
      <Iframe {play} {id} {title} />
    {:else}
      <Image {id} {title} {altThumb} {play} />
      <div class="b__overlay" on:click={() => (play = true)} />
      <div class="v__title"><h3>{title}</h3></div>
    {/if}
    {#if !play}
      <Button on:click={() => (play = true)} {isCustomPlayButton}>
        <slot />
      </Button>
      <!-- <div class="v__title v__title--show"><h3>{title}</h3></div> -->
    {/if}
  </div>
{/await}
