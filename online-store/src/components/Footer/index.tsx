import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Link to="https://github.com/ZmitserFurmanau" target="_blank">
          <div>
            <img width="38" src="./img/github.svg" alt="Github logo" />
          </div>
        </Link>
        <div className={styles.year}>
          <p>© 2022 Zmitser Furmanau</p>
        </div>
        <Link to="https://rs.school/js/" target="_blank">
          <div>
            <img width="86" src="./img/rs_school_js.svg" alt="RSSchool logo" />
          </div>
        </Link>
      </div>
    </div>
  );
};
