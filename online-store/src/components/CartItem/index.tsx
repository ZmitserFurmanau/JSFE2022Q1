import React from 'react';
import styles from './CartItem.module.scss';

import { MinusCircleOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { ICartPizza } from '../../redux/cart/types';
import { pizzaTypes } from '../../utils/constans/pizzaOptions';
import { useAppDispatch } from '../../hooks/redux';
import { changeNumberPizza, removePizzaFromCart } from '../../redux/cart/slice';
import { Popconfirm } from 'antd';

type CartItemProps = {
  pizza: ICartPizza;
};

export const CartItem: React.FC<CartItemProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <img className={styles.img} src={pizza.value.imageUrl} alt="Pizza" />
        <div className={styles.text}>
          <h3>{pizza.value.title}</h3>
          <p>
            {pizzaTypes[pizza.value.type].name}, {pizza.value.size} cm.
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.count}>
          <MinusCircleOutlined
            onClick={() => dispatch(changeNumberPizza({ item: pizza, difference: -1 }))}
            className={pizza.number === 0 ? styles.disabled : ''}
          />
          <b>{pizza.number}</b>
          <PlusCircleOutlined
            onClick={() => dispatch(changeNumberPizza({ item: pizza, difference: 1 }))}
          />
        </div>
        <div className={styles.price}>
          <b>{(pizza.value.price * pizza.number).toFixed(2)} €</b>
        </div>
        <div className={styles.remove}>
          <Popconfirm
            title="Are you sure you want to remove this item?"
            onConfirm={() => dispatch(removePizzaFromCart(pizza))}
            okText="Yes"
            cancelText="No">
            <CloseCircleOutlined />
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};
