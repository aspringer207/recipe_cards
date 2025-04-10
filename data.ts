import type { RecipeType } from './types';

const recipeData: RecipeType[] = [
  {
    name: 'Lemonade',
    id: 'cd_lemonade',
    time: '5 minutes',
    serves: 6,
    notes: 'a slice of lemon',
    ingredients: [
      {
        id: 'ing_lemonade_0',
        amount: 1,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_lemonade_1',
        amount: 1,
        unit: 'quart',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_lemonade_2',
        amount: 0.5,
        unit: 'cup',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_lemonade_3',
        amount: 1,
        unit: 'tbsp',
        item: 'corn syrup',
        optional: true,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_lemonade_1',
        step: 'Make a syrup by boiling the sugar and water for a few minutes, and set aside to cool.',
      },
      {
        id: 'step_lemonade_2',
        step: 'If desired, stir in corn syrup to prevent the mixture from crystallizing during storage.',
      },
      {
        id: 'step_lemonade_3',
        step: 'Mix in the lemon juice.',
      },
      {
        id: 'step_lemonade_4',
        step: 'If desired, stir in corn syrup to prevent the mixture from crystallizing during storage.',
      },
      {
        id: 'step_lemonade_5',
        step: 'Store up to one month. When serving, dilute with ice water to suit the taste.',
      },
    ],
    description:
      'Next to water, no other drink is so refreshing nor quenches the thirst to so great an extent as lemonade. Lemonade is suitable for many occasions, and as lemons can be purchased at any time of the year it can be made at almost any season.',
  },
  {
    name: 'Orangeade',
    id: 'cd_orangeade',
    time: '5 minutes',
    serves: 6,
    notes: 'a slice of orange',
    ingredients: [
      {
        id: 'ing_orangeade_0',
        amount: 0.75,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_orangeade_1',
        amount: 1,
        unit: 'quart',
        item: 'water',
        optional: false,
        portioned: true,
        portions: [['step_orangeade_1', 0.25]],
      },
      {
        id: 'ing_orangeade_2',
        amount: 0.5,
        unit: 'cup',
        item: 'orange juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_orangeade_3',
        amount: 3,
        unit: 'tbsp',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_orangeade_4',
        amount: 1,
        unit: 'tbsp',
        item: 'corn syrup',
        optional: true,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_orangeade_1',
        step: 'Make a syrup of the sugar and PORTION_00 of the water.',
        portion: [['ing_orangeade_1', 0.25]],
      },
      {
        id: 'step_orangeade_2',
        step: 'Allow this to become cool and then add the fruit juices and the remaining water.',
      },
      {
        id: 'step_orangeade_3',
        step: 'If desired, stir in corn syrup to prevent the mixture from crystallizing during storage.',
      },
      {
        id: 'step_orangeade_4',
        step: 'Store up to one month. When serving, dilute with ice water to suit the taste.',
      },
    ],
    description:
      'While not so acid in flavor as lemonade, orangeade is also a delightful drink. On warm days, drinks of this kind should take the place of the hot ones that are generally used during the cold weather.',
  },
  {
    name: 'Grape Lemonade',
    id: 'cd_grp_lmnd',
    time: '5 minutes',
    serves: 6,
    notes: 'fresh fruit',
    ingredients: [
      {
        id: 'ing_grape_lemonade_0',
        amount: 1,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_grape_lemonade_1',
        amount: 1,
        unit: 'quart',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_grape_lemonade_2',
        amount: 0.5,
        unit: 'cup',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_grape_lemonade_3',
        amount: 1,
        unit: 'cup',
        item: 'grape juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_grape_lemonade_4',
        amount: 1,
        unit: 'tbsp',
        item: 'corn syrup',
        optional: true,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_grape_lemonade_1',
        step: 'Make a syrup by boiling the sugar and water for a few minutes, and set aside to cool.',
      },
      {
        id: 'step_grape_lemonade_2',
        step: 'Add the lemon juice.',
      },
      {
        id: 'step_grape_lemonade_3',
        step: 'Add the grape juice to the lemonade and stir well.',
      },
      {
        id: 'step_grape_lemonade_4',
        step: 'If desired, stir in corn syrup to prevent the mixture from crystallizing during storage.',
      },
      {
        id: 'step_grape_lemonade_5',
        step: 'Store up to one month. When serving, dilute with ice water to suit the taste.',
      },
    ],
    description:
      'An excellent combination in the way of a beverage is lemonade and grape juice. Besides adding flavor to the lemonade, the grape juice gives it a delightful color.',
  },
  {
    name: 'Pineapple Lemonade',
    id: 'cd_pnpl_lmnd',
    time: '5 minutes',
    serves: 6,
    notes: 'a spoonful of grated pineapple',
    ingredients: [
      {
        id: 'ing_pineapple_lemonade_0',
        amount: 1,
        unit: 'cup',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_pineapple_lemonade_1',
        amount: 0.75,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_pineapple_lemonade_2',
        amount: 3,
        unit: 'cup',
        item: 'ice water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_pineapple_lemonade_3',
        amount: 1,
        unit: 'cup',
        item: 'canned pineapple juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_pineapple_lemonade_4',
        amount: 3,
        unit: 'count',
        item: 'lemons',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_pineapple_lemonade_5',
        amount: 1,
        unit: 'tbsp',
        item: 'corn syrup',
        optional: true,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_pineapple_lemonade_1',
        step: 'Make a syrup of the water and sugar, and set aside to cool.',
      },
      {
        id: 'step_pineapple_lemonade_2',
        step: 'Add the ice water, the pineapple juice, and the juice of the lemons.',
      },
      {
        id: 'step_pineapple_lemonade_3',
        step: 'If desired, add in corn syrup to prevent the mixture from crystallizing during storage.',
      },
      {
        id: 'step_pineapple_lemonade_4',
        step: 'Stir well, and strain. Store up to one month.',
      },
      {
        id: 'step_pineapple_lemonade_5',
        step: 'Serve over ice.',
      },
    ],
    description:
      'Another variation of lemonade is produced when pineapple juice is added to it. To garnish this beverage, a slice of lemon and a spoonful of grated pineapple are generally used. This pineapple beverage is delightful with wafers or small cakes as refreshments for informal social affairs during hot weather.',
  },
  {
    name: 'Mint Julep',
    id: 'cd_mnt_jlp',
    time: '5 minutes',
    serves: 6,
    notes: 'sprigs of mint',
    ingredients: [
      {
        id: 'ing_mint_julep_0',
        amount: 4,
        unit: 'count',
        item: 'sprigs of mint',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_1',
        amount: 1,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_2',
        amount: 1,
        unit: 'quart',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_3',
        amount: 1,
        unit: 'cup',
        item: 'red cherry',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_4',
        amount: 0.5,
        unit: 'cup',
        item: 'pineapple juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_5',
        amount: 0.5,
        unit: 'cup',
        item: 'orange juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_mint_julep_6',
        amount: 0.25,
        unit: 'cup',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_mint_julep_1',
        step: 'Crush the mint with the sugar, using a potato masher or a large spoon.',
      },
      {
        id: 'step_mint_julep_2',
        step: 'Add the water and fruit juices and strain.',
      },
      {
        id: 'step_mint_julep_3',
        step: 'Serve over ice.',
      },
    ],
    description:
      'Mint drinks are not served so often as some of the other fruit beverages, but those with whom they find favor will undoubtedly be delighted with mint julep prepared according to the following recipe:',
  },
  {
    name: 'Fruit Nectar',
    id: 'cd_frt_nctr',
    time: '5 minutes',
    serves: 6,
    notes: 'fresh strawberries.',
    ingredients: [
      {
        id: 'ing_fruit_nectar_0',
        amount: 0.75,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_nectar_1',
        amount: 2,
        unit: 'cup',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_nectar_2',
        amount: 1.5,
        unit: 'cup',
        item: 'orange juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_nectar_3',
        amount: 1,
        unit: 'cup',
        item: 'pineapple juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_nectar_4',
        amount: 0.5,
        unit: 'cup',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_fruit_nectar_1',
        step: 'Boil the sugar and water for 2 minutes and then cool.',
      },
      {
        id: 'step_fruit_nectar_2',
        step: 'Add the fruit juices.',
      },
      {
        id: 'step_fruit_nectar_3',
        step: 'Strain and serve.',
      },
    ],
    description:
      'The term nectar was used by the early Greeks to mean the drink of the gods. Now it is often applied to an especially delightful beverage. Pineapple combined with lemon is always good, but when orange juice is also used, an excellent nectar is the result.',
  },
  {
    name: 'Red-Raspberry Nectar',
    id: 'cd_raspry_nctr',
    time: '5 minutes',
    serves: 6,
    notes: 'fresh berries',
    ingredients: [
      {
        id: 'ing_red_raspberry_nectar_0',
        amount: 0.5,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_red_raspberry_nectar_1',
        amount: 2,
        unit: 'cup',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_red_raspberry_nectar_2',
        amount: 0.5,
        unit: 'cup',
        item: 'lemon juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_red_raspberry_nectar_3',
        amount: 1.5,
        unit: 'cup',
        item: 'red raspberry',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_red_raspberry_nectar_1',
        step: 'Boil the sugar and water for 2 minutes and allow the syrup to become cool',
      },
      {
        id: 'step_red_raspberry_nectar_2',
        step: 'Add the fruit juices.',
      },
      {
        id: 'step_red_raspberry_nectar_3',
        step: 'Strain and serve.',
      },
    ],
    description:
      'A beverage that is pleasing to the eye, as well as delightful to the taste, can be made by combining red-raspberry juice and lemon juice with the required amount of sugar and water. The juice from canned raspberries may be used for this drink.',
  },
  {
    name: 'Spice Cup',
    id: 'cd_spc_cp',
    time: '5 minutes',
    serves: 6,
    notes: 'candied ginger',
    ingredients: [
      {
        id: 'ing_spice_cup_0',
        amount: 1.5,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_1',
        amount: 1.5,
        unit: 'pint',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_2',
        amount: 12,
        unit: 'count',
        item: 'cloves',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_3',
        amount: 1,
        unit: 'count',
        item: '2 inch cinnamon stick',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_4',
        amount: 3,
        unit: 'count',
        item: 'lemons',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_5',
        amount: 4,
        unit: 'count',
        item: 'oranges',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_spice_cup_6',
        amount: 2,
        unit: 'count',
        item: 'drops oil of wintergreen',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_spice_cup_1',
        step: 'Boil the sugar, water, and spices together for 5 minutes and allow the syrup to become cool.',
      },
      {
        id: 'step_spice_cup_2',
        step: 'Add the juice of the lemons and oranges and the wintergreen oil and serve in glasses over cracked ice.',
      },
    ],
    description:
      'Occasionally a spice drink seems to be just what is desired. When this is the case, the directions given in the accompanying recipe for spice cup should be followed.',
  },
  {
    name: 'Fruit Punch',
    id: 'cd_frt_pnch',
    time: '5 minutes',
    serves: 16,
    notes: 'fresh fruit',
    ingredients: [
      {
        id: 'ing_fruit_punch_0',
        amount: 2.5,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_1',
        amount: 1,
        unit: 'quart',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_2',
        amount: 2,
        unit: 'cup',
        item: 'fruit juice(raspberry, strawberry, or cherry)',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_3',
        amount: 6,
        unit: 'count',
        item: 'oranges',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_4',
        amount: 6,
        unit: 'count',
        item: 'lemons',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_5',
        amount: 1,
        unit: 'count',
        item: 'pint-sized can of grated pineapple',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_6',
        amount: 1,
        unit: 'cup',
        item: 'strong black tea',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_fruit_punch_7',
        amount: 1,
        unit: 'quart',
        item: 'carbonated water',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_fruit_punch_1',
        step: 'Boil the sugar and water for 2 minutes and allow the syrup to become cool.',
      },
      {
        id: 'step_fruit_punch_2',
        step: 'Then add the fruit juice, the juice of the oranges and lemons, the pineapple, and the tea.',
      },
      {
        id: 'step_fruit_punch_3',
        step: 'Just before serving, add the carbonated water, which lends a sparkling appearance and a snappy taste to a beverage of this kind.',
      },
    ],
    description:
      'As fruit beverages are very often served at small receptions, club meetings, or parties, a recipe that will make a sufficiently large quantity is often desired.',
  },
  {
    name: 'Ginger-Ale Punch',
    id: 'cd_gngr_pnch',
    time: '5 minutes',
    serves: 10,
    notes: 'fresh fruit',
    ingredients: [
      {
        id: 'ing_ginger_ale_punch_0',
        amount: 1.5,
        unit: 'cup',
        item: 'sugar',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_1',
        amount: 1,
        unit: 'pint',
        item: 'water',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_2',
        amount: 2,
        unit: 'count',
        item: 'lemons',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_3',
        amount: 3,
        unit: 'count',
        item: 'oranges',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_4',
        amount: 1,
        unit: 'pint',
        item: 'grape juice',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_5',
        amount: 4,
        unit: 'count',
        item: 'sprigs of fresh mint',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_6',
        amount: 1,
        unit: 'count',
        item: 'lemon, sliced thin',
        optional: false,
        portioned: false,
      },
      {
        id: 'ing_ginger_ale_punch_7',
        amount: 1,
        unit: 'quart',
        item: 'ginger ale',
        optional: false,
        portioned: false,
      },
    ],
    directions: [
      {
        id: 'step_ginger_ale_punch_1',
        step: 'Boil the sugar and water for 2 minutes and allow the syrup to become cool',
      },
      {
        id: 'step_ginger_ale_punch_2',
        step: 'Drill the juice from the lemons and oranges and add this with the grape juice, crushed mint, and sliced lemon to the syrup',
      },
      {
        id: 'step_ginger_ale_punch_3',
        step: 'Just before using, add the ginger ale and serve over cracked ice',
      },
    ],
    description:
      'As most persons like the flavor of ginger ale, punch containing ginger ale is always a favorite when a large company of persons is to be served.',
  },
];
export default recipeData;
