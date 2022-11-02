import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href='/'>Home</Link>
          <br />
          <Link href='/about'>About</Link>
        </menu>
      </nav>
    </div>
  );
};
