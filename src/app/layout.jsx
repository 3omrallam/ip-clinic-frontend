import React from 'react';

import { PropTypes } from 'prop-types';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ip-clinic',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

/**
 * @prop { Children } is holder of childs components
 * @returns { <Component /> }
 */
RootLayout.propTypes = {
  children: PropTypes.element.isRequired,
};