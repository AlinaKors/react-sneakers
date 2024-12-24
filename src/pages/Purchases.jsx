import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EmptyPage from '../components/EmptyPage';
import { Fragment, useContext, useEffect, useState } from 'react';
import SneakersContext from '../context';
import axios from 'axios';

export default function Purchases () {
    const {deleteCart, addingCart, likeProduct, dislikeProduct} = useContext(SneakersContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData () {
          try{
            const {data} = await axios.get('https://ff4d43b0c6975608.mokky.dev/orders');
            setOrders(data);
            setTimeout(() => setIsLoading(true), 1000);
          } catch(error) {
            console.log("Ошибка при запросе данных");
            console.error(error);
          }
        }
        fetchData();
      }, []);

    return( 
        orders && orders.length > 0 ?
         <div className='orders'>
            <div className='containerTitle'>
                <Link to='/'>
                    <img src='/img/back.svg' alt="back"></img>
                </Link>
                <h1>Мои покупки</h1>
            </div>
            <div className='sneakersWrapper'>
                        <div className='orderName'>Заказ </div>             
                        <ul>
                            {orders.forEach(itemOrder => {

                            (itemOrder.order).map((item) => 
                            <Card
                                key={item.id}
                                product={item}
                                onAddToCart={addingCart}
                                onDeleteCart={deleteCart}
                                onLikeProduct={likeProduct}
                                onDislikeProduct={dislikeProduct}
                                isLoading={isLoading}
                            />) 
                            })}
                        </ul>
            

            </div>
        </div> :
        <EmptyPage />
    );
}
