export type meal = {
    strMeal: string,
    strMealThumb: string,
    idMeal: string,
    strArea: string,
    strInstructions: string,
    strYoutube: string,
    strMeasure: string,
    strIngredient: string,
  [key: string]: any; 
}

export type category = {
    strCategory: string,
    strCategoryThumb: string,
}


export type Screenprop = {
 
    Home: undefined;
    Welcome: undefined;
    login: undefined,
    CreateNewAccount: undefined,
    Buy: {ingredients: string[]};
    RecipeDetails: { idMeal: string; strMeal: string; strMealThumb: string };
  };


export type Mealprops = {
    item: meal,
    index: number,
    navigation: any; 
};

export type Category = {
    strCategory: string;
    strCategoryThumb: string;
  };
  
export  type CategoriesProps = {
    categories: Category[];
    activeCategory: string;
    handleChangeCategory: (category: string) => void;
  };
  

