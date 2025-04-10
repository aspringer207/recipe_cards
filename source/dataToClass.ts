import Recipe from './Recipe';
import type { RecipeType } from './types';
export default function dataToClass(arr: RecipeType[]) {
  const result: Recipe[] = [];
  arr.forEach((x) =>
    result.push(
      new Recipe(
        x.name,
        x.id,
        x.time,
        x.serves,
        x.notes,
        x.ingredients,
        x.directions,
        x.description
      )
    )
  );
  return result;
}
