const pizza = ref("");
const ingredientsNumber = ref(3);

const usePizza = () => {
    const { selectedDiet, selectedExclusion } = useDiet();
    const { ingredients, categories } = useIngredients();
    const newCats = ref<IngredientCategories>([]);

    const getRandom = (arr: Ingredient[], n: number) => {
        return arr
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
        .slice(0, n);
    };

    let newIngredients = [] as any[];

    const getPizza = () => {
        if (selectedDiet.value === "pescitariana") {
            newCats.value = categories.filter((coppia: string[]) => {
                return !coppia.includes("maiale");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne");
            });
        }
        if (selectedDiet.value === "vegetariana") {
            newCats.value = categories.filter((coppia: string[]) => {
                return !coppia.includes("maiale") && !coppia.includes("pesce");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne") && !ing.restrizioni.includes("pesce");
            });
        }
        if (selectedDiet.value === "vegana") {
            newCats.value = categories.filter((coppia: string[]) => {
                return !coppia.includes("maiale") && !coppia.includes("pesce") && !coppia.includes("formaggio");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne") && !ing.restrizioni.includes("pesce") && !ing.restrizioni.includes("nonvegano") && !ing.restrizioni.includes("lattosio");
            });
        }
        if (selectedDiet.value === "onnivora") {
            newCats.value = categories;
            newIngredients = ingredients;
        }

        newIngredients = newIngredients.filter((ing) => {
            return !ing.restrizioni.includes(selectedExclusion.value);
        });

        const result = getRandom(newIngredients, ingredientsNumber.value);
        const valueLabels = result.map((ing) => {
            return ing.nome;
        });
        const last = valueLabels.pop();

        if (ingredientsNumber.value === 1) {
            pizza.value = `${valueLabels.join(", ")} con ${last}`;
        } else {
            pizza.value = `${valueLabels.join(", ")} e ${last}`;
        }
    };

    return {
        pizza,
        getPizza,
        ingredientsNumber
    };
};

export default usePizza;
export { usePizza };
