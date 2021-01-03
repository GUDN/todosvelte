<script lang="ts">
  import { onMount } from 'svelte'
  import { fetchTodos, initDatabase, Todo } from './model'

  import Input from './Input.svelte'
  import Selector from './Selector.svelte'
  import { default as TodoRenderer } from './Todo.svelte'

  let todos: Array<Todo> = []
  let todoSelected = true

  onMount(async () => {
    await initDatabase()
    todos = await fetchTodos()
  })

  function addTodo(text: string) {
    const todo = new Todo(text)
    todos = [...todos, todo]
  }

  async function clear() {
    for (const todo of todos.filter(todo => todo.done !== todoSelected)) {
      await todo.delete()
    }
    todos = todos.filter(todo => todo.done === todoSelected)
  }
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

  p {
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;

    width: 100%;
    box-sizing: border-box;

    font-family: Roboto;
    font-size: 52px;

    color: black;

    background: #EFEFEF;
    border-radius: 10px;
  }
</style>

<main>
  <h1>Todos</h1>
  <hr />
  <Input on:addTodo={e => addTodo(e.detail)} />
  <hr />

  <Selector bind:todoSelected on:clear={clear} />

  <div>
    {#each todos as todo (todo.id)}
      {#if todo.done !== todoSelected}
        <TodoRenderer
          {todo}
          on:statusUpdate={() => todos = todos}
        />
      {/if}
    {:else}
      <p>Create todo</p>
    {/each}
  </div>
</main>
