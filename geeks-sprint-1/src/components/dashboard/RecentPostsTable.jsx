import { Edit, Trash2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to Start a React Project',
    date: '2025-05-28',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Understanding Tailwind CSS',
    date: '2025-05-20',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Best Practices for State Management',
    date: '2025-05-10',
    status: 'Published',
  },
];

export default function RecentPostsTable() {
  const handleEdit = (id) => {
    alert(`Edit post with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this post?');
    if (confirm) {
      alert(`Deleted post with ID: ${id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Posts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500 border-b">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="text-sm border-b hover:bg-gray-50">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.date}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium 
                    ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(post.id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4 inline" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
