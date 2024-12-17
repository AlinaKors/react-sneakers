import React from 'react';
import styles from './Info.module.scss';

export default function Info ({title, description, imgSrc, alt, closeCart})  {

  return (
    <div className={styles.centerBlock}>
        <img src={imgSrc} alt={alt}></img>
        <span>{title}</span>
        <p>{description}</p>
        <button className={styles.btnBack} onClick={closeCart}>
        Вернуться назад
        <img src="/img/next.svg" alt="back arrow" />
        </button>
    </div>
  )
}
