import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
    className={clsx('hero hero--lin1', styles.heroBanner)}
  >
    <div className="container">
      <Heading as="h1" className="hero__title">
        {siteConfig.title}
      </Heading>
        <p className="hero__subtitle">The <b>*largest*</b> io-game repository on the face of the Earth!🌍</p>
        <div className={styles.buttons}>
           <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn to install scripts | 2 Min ⏱️
          </Link> 
          </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
     // title={`Hello from ${siteConfig.title}`}d
      description="Welcome to cat2d2/io, the *largest* io-game repository on the face of the Earth!🌍 Userscripts, open-sourced io-games, and more!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
