import { JSXFactory } from 'jsxFactories/jsxfactory';

export const CustomElement = (attributes: {attr: string}, contents: any): JSX.Element => {
  return <p>{attributes.attr}</p>
}
