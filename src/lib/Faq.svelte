<script>
  export let open = false;
  import { slide } from 'svelte/transition';
  const handleClick = () => open = !open;
</script>

<div class="accordion">
  <button class="header cursor-pointer" on:click={handleClick}>
    <div class="text">
      <slot name="head"></slot>
    </div>
    <div class="button">
      +
    </div>
  </button>

  {#if open}
  <div class="details" transition:slide>
    <slot name="details"></slot>
  </div>
  {/if}
</div>

<style>
  .accordion {
    margin: 3rem auto;
    max-width: 936px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 3rem;
  }

  button.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer; /* Ensures the pointer cursor applies to the entire header */
  }

  div.details {
    padding: 1rem 0;
  }

  .text {
    text-align: left;
  }

</style>
