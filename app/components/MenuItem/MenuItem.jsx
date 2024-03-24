import Link from 'next/link';
import React from 'react';

const MenuItem = ({ href, children, setMenuOpen }) => {
  return (
    <Link href={href} onClick={() => setMenuOpen(false)}>
      <li className="px-10 py-6 text-white cursor-pointer">{children}</li>
    </Link>
  );
};

export default MenuItem;
