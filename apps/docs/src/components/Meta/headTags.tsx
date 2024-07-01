/**--TODO :List it globally and commonly for all pages.Need to add in themes/CustomLayout ------. */
// src/components/CustomLayout.js
import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

function CustomLayout({ children, ...props }) {
  return (
    <Layout {...props}>
      <Head>
      <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="ZeroMagic - Instant API and GraphQL Builder"/>
        <meta property="og:description" content="Instantly build APIs and GraphQL from your business data with ZeroMagic. Seamless integration and robust API generation."/>
        <meta property="og:url" content="https://www.zeromagic.com"/>
      </Head>
      {children}
    </Layout>
  );
}

export default CustomLayout;
