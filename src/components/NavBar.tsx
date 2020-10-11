import { JSXFactory } from 'jsxFactories/jsxfactory';
import { ALink } from './ALink';

type LinkItem = [text: string, href: string];
type LinkList = LinkItem[];

interface NavBarAttributes {
  Links: LinkList
}

interface NavBarElementHandler {
  (attributes: NavBarAttributes, contents: any): JSX.Element;
}

const NavElement = ({ href }: { href: string }, contents:any): JSX.Element => {
  return <li><ALink href={href}>{contents}</ALink></li>
}

export const NavBar: NavBarElementHandler = ({ Links }, contents) => {
  return (
    <div>
      <ul>
        <li><h2>NavBar</h2></li>
        {
          Links.map(([text, href]) => {
            return <NavElement href={href}>{text}</NavElement>;
          })
        }
        {/* {
          [() => {
            console.log('HHHH')
            // return <NavElement href='single'>'single'</NavElement>
          }]
        } */}
      </ul>
    </div>
  );
}