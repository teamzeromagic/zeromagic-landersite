import React from 'react';
import Link from '@docusaurus/Link'; 
import Star from "@site/static/img/star.svg";
import hasuraFree from "@site/static/img/hasura-free.png";
import styles from './styles.module.css';

const ZeromagicWithBanner = () => {
  return (
    <Link className={styles["remove-text-decoration"]} href="https://cloud.hasura.io/signup?pg=docs&plcmt=pre-footer&cta=try-graphql-with-hasura&tech=default">
      <div className={styles["zeromagic-wrapper"]}>
        <div className={styles["p40"]}>
          <h3>
            Start with GraphQL on Hasura for Free
          </h3>
          <ul className={styles["desc"]}>
            <li>
              <Star />
              Build apps and APIs 10x faster
            </li>
            <li>
              <Star />
              Built-in authorization and caching
            </li>
            <li>
              <Star />
              8x more performant than hand-rolled APIs
            </li>
          </ul>
          <div className={styles["try-zeromagic"]}>
            Try GraphQL with Hasura 
          </div>
        </div>
        <div className={styles["show-mobile"]}>
          <img src={hasuraFree} alt="Promo" />
        </div>
      </div>
    </Link>
  );
}

export default ZeromagicWithBanner;