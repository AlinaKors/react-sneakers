import {useContext} from "react";

import SneakersContext from '../context';

export const useCart = () => {
    const {sneakers} = useContext(SneakersContext);
    const checkEmpty = sneakers.some(product => product.isAdded);
    const sneakersAdd = sneakers.filter(product => product.isAdded);
    const totalPrice = sneakersAdd.reduce((sum, product) => sum + product.price, 0);

    return{sneakers, totalPrice, checkEmpty}
}