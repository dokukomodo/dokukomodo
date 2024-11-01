import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {Button} from '@mui/material';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="maintitle">
          <h1>Powerful ♥️</h1>
        </Heading>
        <p className="subtitle"> {siteConfig.tagline} </p>
        <div className={styles.buttons}>
          <Link className="button bui1" to="docs/intro">
            <Button variant="contained">Document</Button>
          </Link>
          <Link className="button bui2" to="blog">
            <Button variant="contained">Articles</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title= {siteConfig.title}
      description='deskipsi'>
      <HomepageHeader />
      <main>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}