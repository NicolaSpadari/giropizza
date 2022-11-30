const selectedDiet = useSessionStorage("diet", "vegana");
const selectedExclude = useSessionStorage("exclude", "");

const useIngredients = () => {
    const diet = [
        { label: "onnivora", icon: "i-fa-solid-drumstick-bite" },
        { label: "pescitariana", icon: "i-fa-solid-fish" },
        { label: "vegetariana", icon: "i-fa-solid-cheese" },
        { label: "vegana", icon: "i-fa-solid-seedling" }
    ];
    const exclude = [
        { label: "nulla", icon: "i-fa-solid-times" },
        { label: "piccante", icon: "i-fa-solid-pepper-hot" },
        { label: "lattosio", icon: "i-fa-solid-fill" }
    ];

    return {
        diet,
        exclude,
        selectedDiet,
        selectedExclude
    };
};

export default useIngredients;
export { useIngredients };
