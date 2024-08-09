const carsInLot = [
    { id: 1, name: "Ford", quantity: 10 },
    { id: 2, name: "Porshe", quantity: 3 },
    { id: 3, name: "Dodge", quantity: 4 },
]

const initialState = {
    cars: carsInLot,
}

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "sell":
            return {
                ...state,
                cars: state.cars.map((car) =>
                    car.id === action.payload && car.quantity > 0 ? { ...car, quantity: car.quantity - 1 } : car
                ),
            }
        default:
            return state;
    }
}