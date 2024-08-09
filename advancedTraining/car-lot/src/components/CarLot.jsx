import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carSellSuccess } from '../actions/actions';

export default function CarLot() {
    const cars = useSelector((state) => state.cars)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Available Cars</h2>
            {
                cars.map((carItem) => (
                    <>
                    <li key={carItem.id} >{carItem.name} ======== Quantity :{carItem.quantity} ========                     <button onClick={() => dispatch(carSellSuccess(carItem.id))}>Sell</button>
</li>
                    </>


                ))
            }
        </div>
    )
}
