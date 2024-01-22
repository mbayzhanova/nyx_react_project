import React from 'react';
import style from '../../assets/stylesheets/main.module.css';
import community from '../../assets/icons/community.svg';
import vegan from '../../assets/icons/vegan.svg';
import free from '../../assets/icons/free.svg';

const PreFooter = () => {
  return (
    <div className={style.PreFooterContainer}>
        <div className={style.PreFooterMain}>
            <div className={style.PreFooter}>
                <img src={community} alt='community'></img>
                <p className={style.PreFooterText}>Оригинальная продукция</p>
            </div>
            <div className={style.PreFooter}>
                <img src={vegan} alt='vegan'></img>
                <p className={style.PreFooterText}>Низкие цены</p>
            </div>
            <div className={style.PreFooter}>
                <img src={free} alt='free'></img>
                <p className={style.PreFooterText}>Бесплатная консультанция</p>
            </div>
        </div>
    </div>
  );
}

export default PreFooter;