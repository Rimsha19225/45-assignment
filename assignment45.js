//QUESTION: 45
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(myCar);
export {};
