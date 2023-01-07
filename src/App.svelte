<script>
// @ts-nocheck
// import Sidebar from './lib/Sidebar.svelte';
// let sidebar_show = false;

import Youtube from "./lib/Youtube.svelte";
// https://github.com/sharu725/youtube-embed
  import ytbs from "./data.json";

//    import DarkMode from "svelte-dark-mode";

  let theme;
  $: switchTheme = theme === "dark" ? "light" : "dark";
  $: document.body.className = theme;

//   import { Side, Nav, SidebarList } from 'svelte-sidebar-menu';
</script>

<nav id="NavBar"></nav>
<main>
    <article>
        <h2 class="vid-group__title">Tinna Tình</h2>
        <div class="vid-list">
            {#each ytbs.TinnaTinh as vid}
                <Youtube id="{vid}" />
            {/each}
        </div>
    </article>

    <article>
        <h2 class="vid-group__title">Tâm Chương</h2>
        <div class="vid-list">
            {#each ytbs.TamChuong as vid}
                <Youtube id="{vid}" />
            {/each}
        </div>
    </article>
</main>

<!-- Darkmode -->
<!-- <DarkMode bind:theme />

<h1>This is {theme} mode.</h1>
<p>Change the theme and reload the page.</p>

<button on:click={() => (theme = switchTheme)}>
  Switch to {switchTheme} mode
</button>

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style> -->

<!-- <button on:click={() => sidebar_show = !sidebar_show} id="tgSide"></button> -->

<!-- <Sidebar bind:show={sidebar_show} /> -->
