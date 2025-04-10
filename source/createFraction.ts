import { createMath } from './elementFactory';

export default function createFraction(numerator: number, denominator: number) {
  if (numerator % 1 !== 0) {
    throw console.error('Numerator must be a whole number');
  }
  if (denominator % 1 !== 0) {
    throw console.error('Denominator must be a whole number');
  }
  if (Math.abs(numerator) !== numerator) {
    throw console.error('Numerator must be a positive integer');
  }
  if (Math.abs(denominator) !== denominator) {
    throw console.error('Denominator must be a positive integer');
  }
  const numElement = createMath('mn', String(numerator));
  const denomElement = createMath('mn', String(denominator));
  const fraction = createMath('mfrac');
  fraction.appendChild(numElement);
  fraction.appendChild(denomElement);
  const mathElement = createMath('math');
  mathElement.appendChild(fraction);
  return mathElement;
}
