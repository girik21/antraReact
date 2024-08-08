import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Books.module.css';

export default function BookLibrary() {
    const books = useSelector(state => state);
    const dispatch = useDispatch();

    const rentedStatus = (id) => {
        dispatch({ type: "BOOK_RENTED", payload: id });
    }

    return (
        <div className={styles.mainContainer}>
            <h1>Books Library</h1>
            <ul className={styles.bookList}>
                {books.map(book => (
                    <li key={book.id} className={styles.bookContainer}>
                        <div className={styles.title}>{book.title}</div>
                        <div className={styles.author}>by {book.author}</div>
                        <div className={styles.rented}>{book.rented ? 'Rented' : 'Available to Read'}</div>
                        <button
                            className={styles.button}
                            onClick={() => rentedStatus(book.id)}
                        >
                            {book.rented ? 'Return' : 'Rent'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
