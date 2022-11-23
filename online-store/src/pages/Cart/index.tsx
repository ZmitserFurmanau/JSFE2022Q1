import React from 'react';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, DeleteOutlined, LeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { CartItem } from '../../components';
import { clearCart } from '../../redux/cart/slice';
import { Popconfirm } from 'antd';

const Cart: React.FC = () => {
  const { items, numberItems, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onClickPay = () => {
    alert('Thank you for your purchase');
    dispatch(clearCart());
  };

  return (
    <div className={styles.content}>
      <div className="container">
        {items.length !== 0 ? (
          <div className={styles.cart}>
            <div className={styles.top}>
              <h2 className={styles.title}>
                <ShoppingCartOutlined />
                Bag
              </h2>
              <Popconfirm
                title="Are you sure you want to clear your bag?"
                onConfirm={() => dispatch(clearCart())}
                okText="Yes"
                cancelText="No">
                <div className={styles.clear}>
                  <span>Clear Bag</span>
                  <DeleteOutlined />
                </div>
              </Popconfirm>
            </div>
            <div className={styles.items}>
              {items.map((item, index) => (
                <CartItem key={index} pizza={item} />
              ))}
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_details}>
                <span>
                  Total: <b>{numberItems} pizzas</b>
                </span>
                <span>
                  Order: <b>{totalPrice.toFixed(2)} €</b>
                </span>
              </div>
              <div className={styles.bottom_buttons}>
                <Link to="/" className={`button button--outline button--add ${styles.button_back}`}>
                  <LeftOutlined />
                  <p>Back</p>
                </Link>
                <Link to="/">
                  <div className={`button ${styles.button_pay}`} onClick={onClickPay}>
                    Pay now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <h2>Your Bag is empty 😕</h2>
            <p>
              You probably haven&#39;t ordered pizza yet
              <br />
              To order pizza, go to the main page
            </p>
            <img src="/img/empty-cart.png" alt="Empty cart" />
            <Link to="/">
              <button className="button button--black">Back</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
