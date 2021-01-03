import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface ITodo {
  text: string
  done: boolean
  readonly id: number
}

interface TodoSchema extends DBSchema {
  todos: {
    value: {
      text: string
      done: boolean
      id?: number
    }
    key: number
    indexes: { 'by-id': number }
  }
}

class Todo implements ITodo {
  private _id: number
  private _done: boolean

  constructor(readonly text: string, id?: number, done: boolean = false) {
    this._done = done
    if (id) {
      this._id = id
    } else {
      this.create()
    }
  }

  get done() {
    return this._done
  }

  set done(value) {
    this._done = value
    this.save()
  }

  get id() {
    return this._id
  }

  private async create() {
    this._id = await db.add('todos', {
      text: this.text,
      done: this._done,
    })
  }

  private async save() {
    await db.put('todos', {
      text: this.text,
      done: this._done,
      id: this.id,
    })
  }

  async delete() {
    await db.delete('todos', this.id)
  }
}

let db: IDBPDatabase<TodoSchema>

async function initDatabase() {
  db = await openDB<TodoSchema>('todos', 1, {
    upgrade(db) {
      const todoStore = db.createObjectStore('todos', {
        keyPath: 'id',
        autoIncrement: true,
      })
      todoStore.createIndex('by-id', 'id')
    },
  })
}

async function fetchTodos(): Promise<Array<Todo>> {
  const result: Array<Todo> = []
  for (const value of (await db.getAll('todos'))) {
    const { id, text, done } = value
    const todo = new Todo(text, id, done)
    result.push(todo)
  }
  return result
}

export { initDatabase, fetchTodos, Todo }
