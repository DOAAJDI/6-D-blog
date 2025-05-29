import { Home, PenTool, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">MyBlog</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-purple-400">
          <Home size={18} /> Dashboard
        </Link>
        <Link to="/editor" className="flex items-center gap-2 hover:text-purple-400">
          <PenTool size={18} /> New Post
        </Link>
        <Link to="/login" className="flex items-center gap-2 mt-auto hover:text-red-400">
          <LogOut size={18} /> Logout
        </Link>
      </nav>
    </aside>
  );
}
