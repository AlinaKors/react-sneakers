import { Link } from 'react-router-dom';
import Card from '../components/Card';
import EmptyPage from '../components/EmptyPage';
import { useContext } from 'react';
import SneakersContext from '../context';

export default function Favourites({isLoading}) {

    const {sneakers, deleteCart, addingCart, likeProduct, dislikeProduct} = useContext(SneakersContext);
    const sneakersFavourites = sneakers.filter(product => product.isFavourite);

    return( 
        sneakersFavourites.length > 0 ? <div className='favourites'>
            <div className='containerTitle'>
                <Link to='/'>
                    <img src='/img/back.svg' alt="back"></img>
                </Link>
                <h1>Мои закладки</h1>
            </div>
            <div className='sneakersWrapper'>
                <ul>
                    {sneakersFavourites.map((item) => 
                    <Card
                        key={item.id}
                        product={item}
                        onAddToCart={addingCart}
                        onDeleteCart={deleteCart}
                        onLikeProduct={likeProduct}
                        onDislikeProduct={dislikeProduct}
                        isLoading={isLoading}
                    />) 
                    }
                </ul>
            </div>
        </div> :
        <EmptyPage />
    );
}