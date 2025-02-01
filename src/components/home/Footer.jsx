import Link from 'next/link';
import Socials from '../widgets/Socials';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 py-8 bg-main text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <p>📞 +123 456 789</p>
          <p>✉ info@example.com</p>
          {/* <div className="hidden md:flex items-center gap-4">
            <p className="text-sm">📞 +123 456 789</p>
            <p className="text-sm">✉ info@example.com</p>
          </div> */}
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
