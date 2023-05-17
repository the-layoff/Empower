import { createSignal, onCleanup, onMount, type JSXElement, type Setter } from 'solid-js'
import './Counter.css'

interface CounterProps {
  max: number
  count: number
  iteration: number
}
export default function Counter (props: { count: CounterProps, setCount: Setter<CounterProps> }): JSXElement {
  const [text, setText] = createSignal('Running... ->')
  const [text2, setText2] = createSignal('Running... ->')
  const [text3, setText3] = createSignal('Running... ->')
  const [isDone, setIsDone] = createSignal(false)
  const inc: () => void = () => {
    const newState = { ...props.count, count: props.count.count + 1 }
    props.setCount(newState)
  }
  const dec: () => void = () => {
    const newState = { ...props.count, count: props.count.count - 1 }
    props.setCount(newState)
  }

  onMount(() => {
    const numberInterval = setInterval(() => {
      const maxAge = props.count.max
      if (props.count.count < maxAge) {
        inc()
      } else {
        setText('Count: ')
        setText2(`Click up to ${props.count.max}`)
        setText3('Click down to zero')
        setIsDone(true)
        clearInterval(numberInterval)
      }
    }, props.count.iteration)
    onCleanup(() => { clearInterval(numberInterval) })
  })
  return (
    <div class="btn-container">
      <div class="sm-container">
        <div role="button" class="increment"
          onClick={(e) => {
            inc()
          }}
        >
          {text2()}
        </div>
        <div>
          { props.count.count }
        </div>
      </div>
      <div class="sm-container">
        <div>
          {props.count.count}
        </div>
        <button class="disabled" disabled={true}>
           {text()}
        </button>
      </div>
      <div class="sm-container">
        <div class="decrement" onClick={() => { dec() }} >
          {text3()}
        </div>
        <div>
          {!isDone() ? props.count.count : '0'}
        </div>
      </div>
    </div>
  )
}
