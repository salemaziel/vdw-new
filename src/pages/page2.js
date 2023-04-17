import React from 'react';
import Layout from '@/components/Layout';
import Container from '../components/UI/Container';
import Link from '../resolvers/Link';

const IndexPage = () => (
  <Layout nav>
    <section>
      <Container className='flex items-center justify-center h-screen text-center'>
        <div>
          <h1 className='font-bold text-9xl dark:text-white'>404.</h1>
          <h2 className='text-4xl font-bold dark:text-white'>Page Not Found</h2>
          <div className='max-w-md mx-auto mt-6 text-xl dark:text-white'>
            We can’t seem to find the page you’re looking for. Try going back to
            the previous page.
          </div>
          <Link
            to='/'
            className='inline-block max-w-md px-6 py-3 mx-auto mt-6 text-lg font-bold tracking-tight text-white lowercase bg-black dark:bg-white dark:text-black'>
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  </Layout>
);

export default IndexPage;