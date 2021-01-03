<style>
  input {
    width: 80%;

    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Roboto;
    font-size: 52px;
    line-height: 61px;
    padding: 10px;

    outline: none;
  }

  input:focus, input:active {
    border: 2px solid black;
  }

  input::placeholder {
    color: #A4A4A4;
  }

  button {
    width: 17%;

    font-family: Roboto;
    font-size: 52px;
    line-height: 61px;
    text-align: center;

    color: #fff;

    background: #839DF6;
    border-radius: 10px;

    border: none;
    outline: none;
  }

  button:focus {
    border: 1px solid black;
  }

  form {
    width: 100%;
    height: 77px;

    display: flex;
    justify-content: space-between;
  }
</style>

<form on:submit|preventDefault>
  <input placeholder="Enter new todo" />
  <button type="submit">ADD</button>
</form>
