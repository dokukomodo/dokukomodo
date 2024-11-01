import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
        <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={('/img/logo.svg')}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'Build <b>optimized</b> websites <b>quickly</b>, focus on your <b>content</b>',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs">
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--info" to="https://docusaurus.new">
            <Translate>Try a Demo</Translate>
          </Link>
        </div>
      </div>
   </div>
  );
}

function TopBanner() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to={`/blog/releases/${announcedVersion}`}
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{new: announcedVersion}}>
            {'Docusaurus\xa03.5 is\xa0out!️'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
      </div>
  );
}
  
export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
      <TopBanner />
      <HeroBanner />
      <HomepageFeatures />
      </main>
    </Layout>
  );
}