import '../globals.css';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body className="flex min-h-screen">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
