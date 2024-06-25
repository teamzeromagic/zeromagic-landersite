import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BlogBanner from "@site/static/img/blog-banner.png"
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">

        <div className="hero__pretext">
          <span>Hands-on tutorial 🔥</span>
        </div>
        <Heading as="h1" className="hero__title">
          Get Started With Docs Site
        </Heading>
 
        <p className="hero__subtitle">
          Docs Site is a comprehensive platform designed to help you create,
          manage, organize and share documentation effortlessly. Whether you're
          a developer, writer, or project manager.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/overview/"
            style={{ alignSelf: "left" }}
          >
            Let's Explore - 5min ⏱️
          </Link>
        </div>
      </div>

         
      {/* <div className="banner__img">
        <img src={BlogBanner} alt="at something" />
      </div> */}
    </header>
  );
}

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
