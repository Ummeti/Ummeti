import Link from 'next/link';
import React from 'react';
import YoutubeIcon from '../icons/YoutubeIcon';
import XIcon from '../icons/XIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';

export default function Socials() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href="/">
          <YoutubeIcon />
        </Link>
      </li>
      <li>
        <Link href="/">
          <XIcon />
        </Link>
      </li>
      <li>
        <Link href="/">
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href="/">
          <InstagramIcon />
        </Link>
      </li>
    </ul>
  );
}
