import { createEffect, createSignal, onCleanup, type JSXElement } from 'solid-js'
import './Counter.css'

export default function Counter (): JSXElement {
  const [count, setCount] = createSignal(0)
  const [text, setText] = createSignal('Running... ->')
  const [isDone, setIsDone] = createSignal(false)
  const inc: (num: number) => void = (num: number) => setCount(num + 1)
  const dec: (num: number) => void = (num: number) => setCount(num - 1)

  createEffect(() => {
    const age = setInterval(() => {
      const maxAge = 100
      if (count() < maxAge) {
        setCount(c => c + 1)
      } else {
        setText('Click down to zero')
        setIsDone(true)
        clearInterval(age)
      }
    }, 50)
    onCleanup(() => { clearInterval(age) })
  })
  return (
    <button class="increment" disabled={count() <= 0} onClick={() => { isDone() ? dec(count()) : inc(count()) }}>
      {text()} {count()}
    </button>
  )
}
