const useIngredients = () => {
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
        nome: "champignon",
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
        nome: "bufala",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "burrata",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "stracciatella",
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
        restrizioni: ["piccante"]
    }, {
        nome: "pesto",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "friarielli",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "scaglie di grana",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "scamorza",
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
        nome: "pancetta",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "peperoni",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "radicchio",
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
        nome: "zucca",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "fiori di zucca",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "crema di zucca",
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
        nome: "rosmarino",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "cipolla",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "cipolle caramellate",
        categoria: "topping",
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
        nome: "basilico",
        categoria: "topping",
        restrizioni: []
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
        nome: "pomodori secchi",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "spinaci",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "rag??",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "pistacchi",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "sfilacci di cavallo",
        categoria: "maiale",
        restrizioni: ["carne"]
    }, {
        nome: "brie",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }, {
        nome: "asparagi",
        categoria: "verdura",
        restrizioni: []
    }, {
        nome: "mais",
        categoria: "topping",
        restrizioni: []
    }, {
        nome: "ricotta",
        categoria: "formaggio",
        restrizioni: ["lattosio"]
    }] as Ingredient[];

    const categories = [
        ["maiale", "verdura"],
        ["maiale", "formaggio"],
        ["maiale", "topping"],
        ["pesce", "verdura"],
        ["pesce", "topping"],
        ["frutta", "formaggio"],
        ["formaggio", "formaggio"],
        ["formaggio", "verdura"],
        ["formaggio", "topping"],
        ["verdura", "verdura"],
        ["verdura", "topping"],
        ["maiale", "formaggio", "topping"],
        ["maiale", "formaggio", "verdura"],
        ["maiale", "verdura", "topping"],
        ["maiale", "topping", "topping"],
        ["pesce", "verdura", "topping"],
        ["pesce", "topping", "topping"],
        ["formaggio", "formaggio", "formaggio"],
        ["formaggio", "formaggio", "topping"],
        ["formaggio", "verdura", "topping"],
        ["formaggio", "topping", "topping"],
        ["verdura", "verdura", "topping"],
        ["maiale", "formaggio", "verdura", "topping"],
        ["maiale", "formaggio", "formaggio", "topping"],
        ["maiale", "formaggio", "formaggio", "verdura"],
        ["maiale", "formaggio", "topping", "topping"],
        ["maiale", "verdura", "verdura", "topping"],
        ["formaggio", "formaggio", "formaggio", "formaggio"]
    ] as IngredientCategories;

    return {
        ingredients,
        categories
    };
};

export default useIngredients;
export { useIngredients };
