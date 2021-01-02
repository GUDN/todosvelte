<script lang="ts">
  export let todo

  $: button_text = (todo && todo.done) ? 'Undo' : 'Done'
</script>

{#if !todo}
  Argument is undefined
{:else}
  <div>{todo.text} <button>{button_text}</button></div>
{/if}
