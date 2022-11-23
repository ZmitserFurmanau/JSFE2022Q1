import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <a href="https://github.com/zmitserfurmanau" target="_blank" rel="noopener noreferrer">
          <div>
            <img width="38" src="./img/github.svg" alt="Github logo" />
          </div>
        </a>
        <div className={styles.year}>
          <p>© 2022 Zmitser Furmanau</p>
        </div>
        <a href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
          <div>
            <img width="86" src="./img/rs_school_js.svg" alt="RSSchool logo" />
          </div>
        </a>
      </div>
    </div>
  );
};
