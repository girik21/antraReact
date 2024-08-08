import { useEffect, useState } from 'react';
import store from './index';


export default function useMySelector(selectorFn) {
    const [selectedState, setSelectedState] = useState(selectorFn(store.getState()));

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setSelectedState(selectorFn(store.getState()));
        });

        return () => {
            unsubscribe();
        };
    }, [selectorFn]);

    return selectedState;
}
