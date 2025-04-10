import { ElementNS, TagType } from './types';

export function elementFactory(
  namespace: ElementNS = 'http://www.w3.org/1999/xhtml'
) {
  return function (tag: TagType, text = 'default') {
    if (namespace === 'http://www.w3.org/1999/xhtml') {
      if (text === 'default') {
        return document.createElement(tag);
      } else {
        const el = document.createElement(tag);
        const tx = document.createTextNode(text);
        el.appendChild(tx);
        return el;
      }
    } else {
      if (text === 'default') {
        return document.createElementNS(namespace, tag);
      } else {
        const el = document.createElementNS(namespace, tag);
        const tx = document.createTextNode(text);
        el.appendChild(tx);
        return el;
      }
    }
  };
}

export const create = elementFactory();
export const createMath = elementFactory('http://www.w3.org/1998/Math/MathML');
export const createSVG = elementFactory('http://www.w3.org/2000/svg')
