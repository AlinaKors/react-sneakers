import { Link } from 'react-router-dom';
import styles from './EmptyPage.module.scss';

export default function EmptyPage() {

const namePage = window.location.pathname;
const isFavouritePage = namePage.includes('favourites');

    return(
      <div className={styles.emptyContainer}>
        <img src={isFavouritePage ? '/img/sadSmile.svg' : '/img/crySmile.svg'} alt='sad smile'></img>
        <div>
            <h2>{isFavouritePage ? 'Закладок нет :(' : 'У вас нет заказов'}</h2>
            <span>{isFavouritePage ? `Вы ничего не добавляли в закладки` : `Оформите хотя бы один заказ.`}</span>
        </div>
        <Link to='/' >
            <button className="btnBack">
              Вернуться назад
              <img src="/img/next.svg" alt="back arrow" />
            </button>
        </Link>
      </div>  
    );
}