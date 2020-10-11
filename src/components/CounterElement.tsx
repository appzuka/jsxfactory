import { JSXFactory } from 'jsxFactories/jsxfactory';


export const CounterElement = (attributes: {count: number}, contents: any): any => {
  return <p id='counter'>Counter: {attributes.count.toString()}</p>
}


