import { IngredientType, RecipeType, SimpleType, StepType } from './types';
import { create } from './elementFactory';
import createFraction from './createFraction';
import decToFrac from './decToFrac';
import createMixedNumber from './createMixedNumber';
import isWholeNumber from './isWholeNumber';
import isGreaterThanOne from './isGreaterThanOne';
import Qty from 'js-quantities';

export default class Recipe implements RecipeType {
  name: string;
  id: string;
  time: string;
  serves: number;
  notes: string;
  ingredients: IngredientType[];
  readonly defaultIngredients: IngredientType[];
  directions: StepType[];
  readonly defaultDirections: StepType[];
  description: string;
  constructor(
    name: string,
    id: string,
    time: string,
    serves: number,
    notes: string,
    ingredients: IngredientType[],
    directions: StepType[],
    description: string
  ) {
    this.name = name;
    this.id = id;
    this.time = time;
    this.serves = serves;
    this.notes = notes;
    this.ingredients = ingredients;
    this.defaultIngredients = ingredients;
    this.directions = directions;
    this.defaultDirections = directions;
    this.description = description;
  }
  get workingIngredients(): IngredientType[] {
    return this.workingIngredients;
  }
  set workingIngredients(val: IngredientType[]) {
    this.workingIngredients = val;
  }
  get workingDirections(): StepType[] {
    return this.workingDirections;
  }
  set workingDirections(val: StepType[]) {
    this.workingDirections = val;
  }

  headerText() {
    const result = {
      title: {
        cardLabel: create('h2', this.name),
      },
      servings: {
        serveLabel: create('p', 'Serves'),
        servingSize: create('p', this.serves.toString()),
      },
      time: {
        timeLabel: create('p', 'Prep Time'),
        prepTime: create('p', this.time),
      },
      tips: {
        tips_label: create('p', 'Garnish with'),
        tips: create('p', this.notes),
      },
    };
    return result;
  }
  headerItems() {
    const result = {
      title: create('div'),
      servings: create('div'),
      time: create('div'),
      tips: create('div'),
    };
    return result;
  }
  setClasses(ob: ReturnType<typeof this.headerText> ){
    ob.title.cardLabel.classList.add('card_title')
    ob.servings.serveLabel.classList.add('serving_size_label')
    ob.servings.servingSize.classList.add('serving_size')
    ob.time.prepTime.classList.add("prep_time")
    ob.time.timeLabel.classList.add("prep_time_label")
    ob.tips.tips.classList.add("tips")
    ob.tips.tips_label.classList.add('tips_label')
  }
  header() {
    const headerRow = create('div');
    const headerText = this.headerText();
    const headerItems = this.headerItems();

    headerItems.title.appendChild(headerText.title.cardLabel);
    headerItems.servings.append(
      headerText.servings.serveLabel,
      headerText.servings.servingSize
    );
    headerItems.time.append(
      headerText.time.timeLabel,
      headerText.time.prepTime
    );
    headerItems.tips.append(headerText.tips.tips_label, headerText.tips.tips);
    headerRow.append(
      headerItems.title,
      headerItems.servings,
      headerItems.time,
      headerItems.tips
    );
    this.setClasses(headerText)
    return headerRow;
  }
  getIngredient(qId: IngredientType["id"]){
    let identifiedIngredient = this.defaultIngredients.filter(x => x.id === qId)[0];
    return identifiedIngredient;
  }
  getStep(qId: StepType["id"]){
    let identifiedStep = this.defaultDirections.filter(x => x.id === qId)[0]
    return identifiedStep
  }
  defaultIngredientList() {
    const listElement = create('ul');
    const heading = create("h3", "Ingredients")
    listElement.appendChild(heading)
    
    
    let result = this.ingredients.map((x) => {
      let amt = x.amount;
      let unitString = isGreaterThanOne(amt) ? x.unit.concat('s') : x.unit;
      const listItem = create('li');
      if (isWholeNumber(amt) === false) {
        if (isGreaterThanOne(amt) === false) {
          let frac = decToFrac(amt);
          let fractionELement = createFraction(frac[0], frac[1]);
          listItem.appendChild(fractionELement);
          listItem.appendChild(
            document.createTextNode(' '.concat(x.unit, ' ', x.item))
          );
        } else {
          let base = Math.floor(amt);
          let dec = amt - base;
          let fraction = decToFrac(dec);
          let mixedNumberElement = createMixedNumber(
            base,
            fraction[0],
            fraction[1]
          );
          listItem.appendChild(mixedNumberElement);
          listItem.appendChild(
            document.createTextNode(' '.concat(unitString, ' ', x.item))
          );
        }
      } else {
        listItem.appendChild(
          document.createTextNode(
            String(x.amount)
              .concat(' ', unitString.concat(' ', x.item))
              .replace(/counts?/, '')
          )
        );
      }
      return listItem;
    });
    result.forEach((x) => listElement.appendChild(x));
    return listElement;
  }
  defaultDirectionList(){
    const directionList = create("ol")
    const directionHeading = create("h3", "Directions")
    directionList.appendChild(directionHeading)
    const getPortionString = (n: number) => `PORTION_${String(n.toString()).padStart(2, '0')}`

    for (let step of this.defaultDirections){
      let stepString: string = ''
      if (step.portion){

        let currentId = step.portion[0][0]
        let relevantIngredient = this.getIngredient(currentId)
        for (let n = 0; n < step.portion.length; n++){
          let portionString = getPortionString(n)
          let currentQuantity = Qty(relevantIngredient.amount, relevantIngredient.unit)
          let currentPortion = currentQuantity.mul(step.portion[n][1])
          let qString = currentPortion.toString().concat(relevantIngredient.item)
          let parsedStep = stepString = step.step.replace(portionString,qString )
          stepString = parsedStep
        }
      } else{
        stepString = step.step
      }
      let listItem = create('li', stepString)
      directionList.appendChild(listItem)
    }
    return directionList 
  }
  card() {
    const currentCard = create('div');
    currentCard.classList.add("card")
    const headerRow = this.header();
    const ingredientList = this.defaultIngredientList();
    const stepList = this.defaultDirectionList()
    currentCard.appendChild(headerRow);
    currentCard.appendChild(ingredientList)
    currentCard.appendChild(stepList)
    return currentCard;
  }
}
