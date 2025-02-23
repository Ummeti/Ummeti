import '../globals.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const metadata = {
  title: 'Ummati Dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
