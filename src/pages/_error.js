import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ResetCSS from 'common/assets/css/style';

export default function Error({ statusCode }) {
  const is404 = statusCode === 404;
  return (
    <Fragment>
      <Head>
        <title>{is404 ? '404 - Page not found' : `Error ${statusCode}`}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', margin: 0, color: '#333' }}>
          {statusCode || '404'}
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginTop: 8 }}>
          {statusCode
            ? `An error occurred (${statusCode})`
            : 'Page not found.'}
        </p>
        <Link
          href="/"
          style={{
            marginTop: 24,
            color: '#3444f1',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Back to home
        </Link>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  return { props: { statusCode: 404 } };
}
