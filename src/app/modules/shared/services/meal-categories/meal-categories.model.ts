export enum CategoriesE {
  sfiziosità = 'sfiziosità',
  Kebab = 'Kebab',
  chicken = 'chicken',
  Vegetarian = 'Vegetarian',
  Family = 'Family',
  Childrensmenu = 'Childrensmenu',
  Beef  = 'Beef',
  Fish  = 'Fish',
  Salted  = 'Salted',
  drinks = 'drinks',
}

export type MealCategoriesT = {
  name: CategoriesE;
  picture: string;
  key: keyof typeof CategoriesE;
};
