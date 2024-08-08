import { createStore } from 'redux';

const initialState = [
    { id: 1, title: "Harry Potter 1", author: "JK Rollins", rented: false },
    { id: 2, title: "Harry Potter 2", author: "JK Rollins", rented: false },
    { id: 3, title: "Harry Potter 3", author: "JK Rollins", rented: false }

]

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_RENTED':
            return state.map(book => book.id === action.payload ? { ...book, rented: !book.rented } : book
            );
        default:
            return state;
    }
}


const store = createStore(booksReducer);

export default store;