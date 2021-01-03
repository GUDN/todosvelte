import type { ID } from './types'

interface ITodo {
  text: string
  done: boolean
  id: ID
}

class Todo implements ITodo {
  readonly id: ID
  private _done: boolean

  constructor(readonly text: string) {
    this.id = Date.now()
    this._done = false
  }

  get done() {
    return this._done
  }

  set done(value) {
    this._done = value
  }
}

export type { ITodo }
export { Todo }
