import React from 'react';
import Link from '@docusaurus/Link'; 
import Star from "@site/static/img/circle.svg";
import zmFree from "@site/static/img/zm-free.png";
import styles from './styles.module.css';

const ZeromagicWithBanner = () => {
  return (
    <Link className={styles["remove-text-decoration"]} href="https://cloud.hasura.io/signup?pg=docs&plcmt=pre-footer&cta=try-graphql-with-hasura&tech=default">
      <div className={styles["zeromagic-wrapper"]}>
        <div className={styles["p40"]}>
          <h3>
          Start building with Zeromagic for free
          </h3>
          <ul className={styles["desc"]}>
            <li>
              <Star />
              Build REST & GraphQL APIs 10x faster
            </li>
            <li>
              <Star />
              Built-in Authentication for User Management
            </li>
            <li>
              <Star />
              Scale 5x faster as application grows
            </li>
          </ul> 
        </div>
        <div className={styles["show-mobile"]}>
          <img src={zmFree} alt="Promo" />
        </div>
      </div>
    </Link>
  );
}

export default ZeromagicWithBanner;