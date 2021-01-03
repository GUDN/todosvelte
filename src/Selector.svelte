<script lang="ts">
  export let todoSelected: boolean = true;
</script>

<style>
  div {
    width: 100%;
    height: 61px;

    display: flex;
    justify-content: flex-end;
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

<div>
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
