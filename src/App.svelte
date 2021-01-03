<script lang="ts">
  import Line from './Line.svelte'
  import Input from './Input.svelte'
  import Selector from './Selector.svelte'
  import Todo from './Todo.svelte'

  const todos = []
</script>

<style>
  main {
    position: absolute;
    left: 10%;
    right: 10%;
    top: 50px;

    width: 80%;
    height: auto;
  }

  h1 {
    width: 100%;
    text-align: center;

    font-family: Roboto;
    line-height: 84px;
    font-size: 72px;
    font-weight: 300;
    letter-spacing: 0.02em;
  }

  div {
    margin-top: 10px;
    padding: 10px;
    padding-bottom: 0px;

    width: 100%;
    height: auto;
    box-sizing: border-box;

    border: 1px solid #000000;
    border-radius: 10px;
  }
</style>

<main>
  <h1>Todos</h1>
  <Line />
  <Input />
  <Line />

  <Selector />

  <div>
    {#each todos as todo (todo.id)}
      <Todo {todo} />
    {:else}
      <Todo todo={{ text: 'Create todo', done: false }} />
    {/each}
  </div>
</main>
