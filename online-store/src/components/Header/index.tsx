import React from 'react';
import styles from './Header.module.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export const Header: React.FC = () => {
  const { numberItems, totalPrice } = useAppSelector((state) => state.cart);
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>Online Pizza</h1>
              <p>the most delicious pizza on the all internet 👌</p>
            </div>
          </div>
        </Link>
        {location.pathname !== '/cart' && (
          <div className={styles.cart}>
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice.toFixed(2)} €</span>
              <div className={styles.delimiter}></div>
              <ShoppingCartOutlined />
              <span>{numberItems}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
