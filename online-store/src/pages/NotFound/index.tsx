import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <FrownOutlined className={styles.icon} />
      <h1 className={styles.title}>Nothing found</h1>
      <p className={styles.description}>
        Unfortunately, the specified page does not exist in our online store
      </p>
    </div>
  );
};

export default NotFound;
