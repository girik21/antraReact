import { createStore } from 'redux'
import { carsReducer } from '../reducers/reducers'

export const store = createStore(carsReducer)