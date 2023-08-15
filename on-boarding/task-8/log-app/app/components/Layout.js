import React from 'react';
import Head from 'next/head';
import styles from '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
        <link rel="stylesheet" href={styles} />
      </Head>
      <header>
        <nav>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>All Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/new">
                <a>Create Post</a>
              </Link>
            </li>
          </ul>
        </nav>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;