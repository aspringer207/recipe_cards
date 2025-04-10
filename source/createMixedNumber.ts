import { createMath } from './elementFactory';
import createFraction from './createFraction';

export default function createMixedNumber(b: number, n: number, d: number) {
  let invisiblePlus = String.fromCharCode(0x2064);
  let op = createMath('mo', invisiblePlus);
  op.setAttribute('alttext', 'Invisible Plus Element');
  let base = createMath('mn', b.toString());
  let frac = createFraction(n, d);
  let mathEL = createMath('math');
  mathEL.appendChild(base);
  mathEL.appendChild(op);
  mathEL.appendChild(frac);
  return mathEL;
}
