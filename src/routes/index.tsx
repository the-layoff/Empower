import { createSignal, onMount, type JSXElement } from 'solid-js'
import Counter from '~/components/Counter'
import './index.css'

export default function Home (): JSXElement {
  const [count, setCount] = createSignal({ max: 0, count: 0, iteration: 0 })
  onMount(() => {
    setCount({ max: Math.floor(Math.random() * 1000 + 1), count: 0, iteration: Math.floor(Math.random() * 75) + 1 })
  })
  return (
    <main style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'space-between', 'align-items': 'stretch', 'min-height': '90vh' }}>
      <h1>Hello world from the Techdeus!</h1>
      <div>
        <Counter count={count()} setCount={setCount} />
        <div class="sm-container">
        <span>Count: {count().count}</span>
        <span>Max: {count().max}</span>
        <span>Millisecond Iteration: {count().iteration}</span>
        </div>
        {
          <p>
            Visit{' '}
            <a href="https://start.solidjs.com" target="_blank">
            Solid Apps Are the Bomb!
            </a>
          </p>
        }
      </div>
    </main>
  )
}
