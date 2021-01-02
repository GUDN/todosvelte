<script lang="ts">
  import Line from './Line.svelte'
  import Input from './Input.svelte'
  import Selector from './Selector.svelte'
  import Todo from './Todo.svelte'

  const todos = [
    {id: 1, text: 'Todo 1', done: false},
    {id: 2, text: 'Todo 2', done: false},
    {id: 3, text: 'Todo 3', done: false},
  ]
</script>

<h1>Todos</h1>
<Line />
<Input />
<Line />

<Selector />

<div class="wrapper">
  {#each todos as todo (todo.id)}
    <Todo {todo} />
  {/each}
</div>
