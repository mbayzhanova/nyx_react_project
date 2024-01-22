import React from 'react';
import style from '../../assets/stylesheets/main.module.css';
import problemskin from '../../assets/photos/problemskin.svg';
import ageskin from '../../assets/photos/ageskin.svg';
import dryskin from '../../assets/photos/dryskin.svg';
import pigmentationskin from '../../assets/photos/pigmentationskin.svg'; 

const RecommendationCard = () => {
  return (
    <div className={style.recommendationCard}>
        <div className={style.recommendationCardContainer}>
          <h1>Подборки по вашему типу кожи</h1>
          <div className={style.imagesCardContainer}>
            <span className={style.imageCard}>
              <img src={problemskin} alt="Проблемная кожа" />
              <div className={style.imageText}>
                <p>Проблемная кожа</p>
                <a href='/'>смотреть товары</a>
              </div>
            </span>
            <div className={style.imageCard}>
              <img src={ageskin} alt="Возрастная кожа" />
              <div className={style.imageText}>
                <p>Возрастная кожа</p>
                <a href='/'>смотреть товары</a>
              </div>
            </div>
            <div className={style.imageCard}>
              <img src={dryskin} alt="Сухая кожа" />
              <div className={style.imageText}>
                <p>Сухая кожа</p>
                <a href='/'>смотреть товары</a>
              </div>
            </div>
            <div className={style.imageCard}>
              <img src={pigmentationskin} alt="Постакне и пигментация кожа" />
              <div className={style.imageText}>
                <p>Постакне и пигментация кожа</p>
                <a href='/'>смотреть товары</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default RecommendationCard;
