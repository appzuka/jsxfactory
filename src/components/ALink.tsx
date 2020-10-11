import { JSXFactory } from 'jsxFactories/jsxfactory';

// Normally we would define the attrbutes, but in this case they are the same as JSX.HtmlAnchorTag
// interface ALinkElementHandler {
//   (attributes: JSX.HtmlAnchorTag, contents: string): JSX.Element;
// }

export const ALink = (attributes:JSX.HtmlAnchorTag, contents:any) : any => {
  const cleanedAttributes = {
    href: '/',
    target: "_blank",
    rel:"nofollow noopener noreferrer",
    ...attributes
  };
  return <a {...cleanedAttributes}>{contents}</a>
}