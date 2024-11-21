import { Link } from 'react-router-dom';
import styles from './EmptyPage.module.scss';

export default function EmptyPage() {
    return(
      <div className={styles.emptyContainer}>
        <img src='/img/sadSmile.svg' alt='sad smile'></img>
        <div>
            <h2>{'Закладок нет :('}</h2>
            <span>Вы ничего не добавляли в закладки</span>
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