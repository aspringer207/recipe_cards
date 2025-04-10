export default function decToFrac(decimal: number, atomic: number = 16) {
    const candidates: number[][] = [];
  
    for (let denom = 1; denom <= atomic; denom++) {
      for (let num = 1; num < atomic; num++) {
        if (num / denom === decimal) {
          candidates.push([num, denom]);
        }
      }
    }
    let numerators = candidates.map((x) => x[0]);
    let smallestNumerator = Math.min(...numerators);
    let result = candidates[numerators.indexOf(smallestNumerator)];
    return result;
  }
  