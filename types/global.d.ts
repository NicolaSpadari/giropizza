declare interface Diet {
    label: string
    icon: string
}

declare interface Ingredient {
    nome: string
    categoria: string,
    restrizioni: string[]
}

declare type IngredientCategories = string[][]