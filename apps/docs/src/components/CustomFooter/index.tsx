import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import GithubIcon from '@site/static/icons/github.svg'; 
import DiscordIcon from '@site/static/icons/discord.svg';
import LinkedInIcon from '@site/static/icons/linkedin.svg';
import YoutubeIcon from '@site/static/icons/youtube.svg';
import styles from './styles.module.css'; 

const CustomFooter = () => {
 

  return (
    <footer className={styles['custom-footer-wrapper']}>
      <div className={styles['logo-wrapper']}>
        <img src={useBaseUrl('/img/logo_light.svg')} className={styles['dark-theme-logo']} />
        <img src={useBaseUrl('/img/logo-full.svg')} className={styles['light-theme-logo']} />
      </div>
      <div className={styles['copyright']}>{`© ${new Date().getFullYear()} Zeromagic. All rights reserved`}</div>
      <div className={styles['footerSocialIconsWrapper']}>
        <div className={styles['socialBrands']}>
          <Link href={'https://github.com/hasura/graphql-engine'} rel="noopener noreferrer" aria-label={'Github'}>
            <GithubIcon />
          </Link>
        </div> 
        <div className={styles['socialBrands']}>
          <Link href={'https://discord.com/invite/hasura'} rel="noopener noreferrer" aria-label={'Discord'}>
            <DiscordIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link
            href={'https://www.youtube.com/channel/UCZo1ciR8pZvdD3Wxp9aSNhQ'}
            rel="noopener noreferrer"
            aria-label={'Youtube'}
          >
            <YoutubeIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://www.linkedin.com/company/hasura'} rel="noopener noreferrer" aria-label={'Linkedin'}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;