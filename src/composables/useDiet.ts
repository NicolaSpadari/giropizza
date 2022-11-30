const selectedDiet = useSessionStorage<string>("diet", "onnivora");
const selectedExclusion = useSessionStorage<string>("exclude", "nulla");

const useDiet = () => {
    const diet = [
        { label: "onnivora", icon: "i-fa-solid-drumstick-bite" },
        { label: "pescitariana", icon: "i-fa-solid-fish" },
        { label: "vegetariana", icon: "i-fa-solid-cheese" },
        { label: "vegana", icon: "i-fa-solid-seedling" }
    ] as Diet[];
    const exclude = [
        { label: "nulla", icon: "i-fa-solid-times" },
        { label: "piccante", icon: "i-fa-solid-pepper-hot" },
        { label: "lattosio", icon: "i-fa-solid-fill" }
    ] as Diet[];

    return {
        diet,
        exclude,
        selectedDiet,
        selectedExclusion
    };
};

export default useDiet;
export { useDiet };
