import styles from './Favourites.module.scss';
import { Link } from 'react-router-dom';
import Card from '../Card';

export default function Favourites() {
    return(
        <div className={styles.favourites}>
            <div className={styles.containerTitle}>
                <Link to='/'>
                    <img src='/img/back.svg' alt="back"></img>
                </Link>
                <h1>Мои закладки</h1>
            </div>
            <div className={styles.sneakersWrapper}>
                <ul>
                    {/* {sneakersCard.map((item) => 
                    <Card
                        key={item.id}
                        product={item}
                        onAddToCart={addingCart}
                        onDeleteCart={deleteCart}
                        onLikeProduct={likeProduct}
                        onDislikeProduct={dislikeProduct}
                    />) 
                    } */}
                </ul>
            </div>
        </div>
    );
}