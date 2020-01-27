import axios from 'axios';
import {api} from '../util';
import {fraction} from 'fractional';

export default class mixtuare {
    constructor(id) {
        this.id = id;
    }

    async getMixtuare() {
        try{
            const res = await axios(`${api.cocktailView}${this.id}`);
         //   console.log(res);
            this.title = res.data.drinks[0].strDrink;
            this.img = res.data.drinks[0].strDrinkThumb;
            this.type = res.data.drinks[0].strAlcoholic;
            this.measureDetail = [];
            this.calcIngredient =  () => {
                let ingredients = [];
                let measure = [];
                res.data.drinks.forEach((drink) => {
                    const drinkEntries = Object.entries(drink),
                      [
                        ingredientsArray,
                        measuresArray
                      ] = [
                        "strIngredient",
                        "strMeasure"
                      ].map((keyName) => drinkEntries
                        .filter(([key, value]) => key.startsWith(keyName) && value && value.trim())
                        .map(([key, value]) => value));
                    ingredients = ingredientsArray;
                    this.measure = measuresArray;
                  });
                  return ingredients;
            };

            this.ingredients = this.calcIngredient();

        this.instruction = res.data.drinks[0].strInstructions;
        } catch(error) {
            console.log(error);
            alert('Something went wrong');
        }
    }


    calcServings(){
        this.servings = 4;
    }

    parseIngredients() {
        this.measure.map((currentMeasure) => {
            let newMeasure = {};
            let unit, measure;
            currentMeasure = currentMeasure.trim();
            currentMeasure.split(' ').map((currentElement, index) => {
                if (currentElement > -1) {
                    // console.log(currentElement);
                    unit = currentElement+' ';

                } else if (parseInt(currentElement, 10)) {
                    var decimal = eval(currentElement); 
                    if(isNaN(unit)){
                        unit = decimal;
                    }
                    else{
                    unit = parseFloat(unit) + decimal;
                    }
                } else {
                    measure = currentElement;
                }


            });
            
             
            newMeasure = {
                unit: Math.ceil(unit),
                measure: measure
            }
            this.measureDetail.push(newMeasure);
        });

    }

    updateServings(type){
        //servings 
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
        //ingredients

        this.measureDetail.forEach(currentMeasure => {
      //      console.log(currentMeasure.unit);
            currentMeasure.unit *= (newServings / this.servings);
        })

        this.servings = newServings;
    }

}