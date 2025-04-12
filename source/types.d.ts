import Qty from 'js-quantities';


export declare type SimpleType = number | string;
export declare type MeasurementType =
  | 'volume'
  | 'mass'
  | 'distance'
  | 'temperature'
  | 'count'
  | 'ratio'
  | 'density';
export declare type ElementNS =
  | 'http://www.w3.org/1999/xhtml'
  | 'http://www.w3.org/2000/svg'
  | 'http://www.w3.org/1998/Math/MathML';

export declare type RecipeStateType = {
  units: 'us' | 'metric';
  multiplier: number;
};

export declare type TagType =
  | keyof HTMLElementTagNameMap
  | keyof MathMLElementTagNameMap
  | keyof SVGElementTagNameMap;
export declare type IngredientType = {
  id: string;
  amount: number;
  unit: string;
  item: string;
  optional: boolean;
  portioned: boolean;
  portions?: [string, number][];
};
export declare type PatternType = [count: number, rule: string][];
export declare type StepType = {
  id: string;
  step: string;
  portion?: [string, number][];
};

export declare type RecipeType = {
  name: string;
  id: string;
  time: string;
  serves: number;
  notes: string;
  ingredients: IngredientType[];
  directions: StepType[];
  description: string;
};

export declare type UnitType = {
  name: string;
  amount: number;
  quantity: Qty;
  behavior: UnitBehaviorType;
};

export declare type SystemType = {
  abbrev: string;
  name: string;
  units: UnitType[];
  measurements: MeasurementType[];
  conversions: [string, number][];
};

export declare type UnitBehaviorType = {
  name: string;
  aliases: string[];
  atom: number;
  measures: MeasurementType;
  format: {
    auto: string;
    short: string;
    shortPlural: string;
    long: string;
    longPlural: string;
  };
};
export declare type SVGAttributeType = {};
