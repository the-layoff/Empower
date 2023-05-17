import { type JSXElement } from 'solid-js'
import Counter from '~/components/Counter'
import './index.css'

export default function Home (): JSXElement {
  return (
    <main>
      <h1>Hello world from the Techdeus!</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
         Solid Apps Are the Bomb!
        </a>
      </p>
    </main>
  )
}
