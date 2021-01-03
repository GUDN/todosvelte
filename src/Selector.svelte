<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let todoSelected: boolean = true;

  function onClear(e: Event) {
    dispatch('clear')
    if (e.target instanceof HTMLElement) e.target.blur()
  }
</script>

<style>
  .wrapper {
    width: 100%;
    height: 61px;

    display: flex;
    justify-content: space-between;
  }

  .inner {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 130px;

    font-family: Roboto;
    font-size: 52px;
    text-align: center;

    border: none;
    background-color: transparent;
    outline: none;

    font-weight: 300;
    color: #A4A4A4;
  }

  button.active {
    color: #000000;
    font-weight: normal;
  }

  button:focus {
    border: 1px solid black;
    border-radius: 10px;
  }

  span {
    width: 1px;
    height: 100%;
    background-color: black;

    --margin: 20px;
    margin-left: var(--margin);
    margin-right: var(--margin);
  }
</style>

<div class="wrapper">
  <button class="clear" on:click={onClear}>Clear</button>
  <div class="inner">
    <button
      class:active={todoSelected}
      on:click={e => {
        todoSelected = true
        if (e.target instanceof HTMLElement) e.target.blur()
      }}
    >Todo</button>
    <span></span>
    <button
      class:active={!todoSelected}
      on:click={e => {
        todoSelected = false
        if (e.target instanceof HTMLElement) e.target.blur()
      }}
    >Done</button>
  </div>
</div>
