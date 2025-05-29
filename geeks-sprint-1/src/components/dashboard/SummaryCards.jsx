import { FileText, MessageCircle, Eye } from 'lucide-react';

const stats = [
  {
    label: 'Total Posts',
    value: 18,
    icon: <FileText className="text-blue-600 w-6 h-6" />,
  },
  {
    label: 'Comments',
    value: 43,
    icon: <MessageCircle className="text-green-600 w-6 h-6" />,
  },
  {
    label: 'Views',
    value: 1267,
    icon: <Eye className="text-purple-600 w-6 h-6" />,
  },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-gray-100">
            {stat.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
