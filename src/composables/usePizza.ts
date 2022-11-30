const pizza = ref("");

const usePizza = () => {
    const { selectedExclude, selectedDiet } = useIngredients();

    const getRandom = (arr: any[], n: number) => {
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    };

    const ingredients = [{
        nome: "wurstel",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "patatine fritte",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "patate lesse",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "prosciutto cotto",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "mortadella",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "uova",
        categoria: "formaggio",
        restrizioni: ["nonvegano"]
    }, {
        nome: "funghi champignon",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "porcini",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "salsiccia",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "mozzarella di bufala",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "burrata",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "carciofi",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "olive",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "noci",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "pepe",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "pesto",
        categoria: "topping",
        restrizioni: ["nonvegano"]
    }, {
        nome: "friarielli",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "scaglie di grana",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "salame piccante",
        categoria: "maiale",
        restrizioni: ["carne", "piccante"]
    }, {
        nome: "salame",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "peperoncino",
        categoria: "topping",
        restrizioni: ["piccante"]
    }, {
        nome: "olio piccante",
        categoria: "topping",
        restrizioni: ["piccante"]
    }, {
        nome: "capperi",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "origano",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "acciughe",
        categoria: "topping",
        restrizioni: ["pesce"]
    }, {
        nome: "frutti di mare",
        categoria: "pesce",
        restrizioni: ["pesce"]
    }, {
        nome: "mela",
        categoria: "frutta",
        restrizioni: []
    }, {
        nome: "pera",
        categoria: "frutta",
        restrizioni: []
    }, {
        nome: "panna",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "peperoni",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "melanzane",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "zucchine",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "rucola",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "prosciutto crudo",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "cipolla",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "gorgonzola",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "speck",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "bresaola",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "'nduja",
        categoria: "maiale",
        restrizioni: ["carne", "piccante"]
    }, {
        nome: "salmone",
        categoria: "pesce",
        restrizioni: ["pesce"]
    }, {
        nome: "gamberetti",
        categoria: "pesce",
        restrizioni: ["pesce"]
    }, {
        nome: "calamari",
        categoria: "pesce",
        restrizioni: ["pesce"]
    }, {
        nome: "tonno",
        categoria: "pesce",
        restrizioni: ["pesce"]
    }, {
        nome: "pomodorini",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "spinaci",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "brie",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "ricotta",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }];

    const categories = [["maiale", "verdura"], ["maiale", "formaggio"], ["maiale", "topping"], ["pesce", "verdura"], ["pesce", "topping"], ["frutta", "formaggio"], ["formaggio", "formaggio"], ["formaggio", "verdura"], ["formaggio", "topping"], ["verdura", "verdura"], ["verdura", "topping"], ["maiale", "formaggio", "topping"], ["maiale", "formaggio", "verdura"], ["maiale", "verdura", "topping"], ["maiale", "topping", "topping"], ["pesce", "verdura", "topping"], ["pesce", "topping", "topping"], ["formaggio", "formaggio", "formaggio"], ["formaggio", "formaggio", "topping"], ["formaggio", "verdura", "topping"], ["formaggio", "topping", "topping"], ["verdura", "verdura", "topping"], ["maiale", "formaggio", "verdura", "topping"], ["maiale", "formaggio", "formaggio", "topping"], ["maiale", "formaggio", "formaggio", "verdura"], ["maiale", "formaggio", "topping", "topping"], ["maiale", "verdura", "verdura", "topping"], ["formaggio", "formaggio", "formaggio", "formaggio"]];

    let newCats = [] as any[][];
    let newIngredients = [] as any[];

    const getPizza = () => {
        if (selectedDiet.value === "pescitariana") {
            newCats = categories.filter((coppia) => {
                return !coppia.includes("maiale");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne");
            });
        }
        if (selectedDiet.value === "vegetariana") {
            newCats = categories.filter((coppia) => {
                return !coppia.includes("maiale") && !coppia.includes("pesce");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne") && !ing.restrizioni.includes("pesce");
            });
        }
        if (selectedDiet.value === "vegana") {
            newCats = categories.filter((coppia) => {
                return !coppia.includes("maiale") && !coppia.includes("pesce") && !coppia.includes("formaggio");
            });
            newIngredients = ingredients.filter((ing) => {
                return !ing.restrizioni.includes("carne") && !ing.restrizioni.includes("pesce") && !ing.restrizioni.includes("nonvegano") && !ing.restrizioni.includes("lattosio");
            });
        }
        if (selectedDiet.value === "onnivora") {
            newCats = categories;
            newIngredients = ingredients;
        }

        const result = getRandom(newIngredients, 3);
        const valueLabels = result.map((ing) => {
            return ing.nome;
        });
        const last = valueLabels.pop();

        pizza.value = `${valueLabels.join(", ")} e ${last}`;
    };

    return {
        pizza,
        getPizza
    };
};

export default usePizza;
export { usePizza };
