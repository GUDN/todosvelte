<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Todo } from './model'

  const dispatch = createEventDispatcher()
  export let todo: Todo

  let updateButton: HTMLElement

  $: button_text = (todo && todo.done) ? 'Undo' : 'Done'

  function onClick() {
    todo.done = !todo.done
    dispatch('statusUpdate')
    updateButton.blur()
  }
</script>

<style>
  div {
    width: 100%;
    height: 90px;
    box-sizing: border-box;

    background: #EFEFEF;
    border-radius: 10px;

    margin-bottom: 10px;

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    width: 150px;
    height: 61px;

    background: #839DF6;
    border-radius: 10px;

    font-family: Roboto;
    font-size: 52px;
    text-align: center;

    color: #FFFFFF;

    border: none;
    outline: none;
  }

  button:focus {
    border: 1px solid black;
  }

  span {
    width: calc(100% - 160px);

    font-family: Roboto;
    font-size: 52px;

    color: black;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

{#if !todo}
  <div>Argument is undefined</div>
{:else}
  <div>
    <span>{todo.text}</span>
    <button
      bind:this={updateButton}
      on:click={onClick}
    >{button_text}</button>
  </div>
{/if}
