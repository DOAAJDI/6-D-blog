import Sidebar from './Sidebar';
import Topbar from './Tipbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
