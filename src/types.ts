export type meal = {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}

export type category = {
    strCategory: string,
    strCategoryThumb: string,
}



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
  