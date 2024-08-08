# Simple Book Library Redux implementation using Provider and useSelector

Created a redux store which has reducers to manage whether the books have been rented out or not

- bookReducer handles the `BOOK_RENTED` action toggle

BookLibrary component: Contains `useSelector` and `useDispatch` to dispatch actions

MainEntry: Wrapped the App Component with `PROVIDER` and passes the `{store}` as a prop.