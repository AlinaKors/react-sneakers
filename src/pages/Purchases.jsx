import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EmptyPage from '../components/EmptyPage';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

export default function Purchases () {

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
              {orders.map(itemOrder => {
                return(
                  <Fragment>
                    <div className='orderName'>Заказ {itemOrder.id}</div> 
                    <ul>
                    {itemOrder.order.map((item) =>  
                      <Card
                      key={item.id}
                      product={item}
                      isLoading={isLoading}
                      />)}
                    </ul>
                  </Fragment>
                )
              })}   
            </div>
        </div> :
        <EmptyPage />
    );
}
