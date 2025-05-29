import DashboardLayout from '../components/layout/DashboardLayout';
import SummaryCards from '../components/dashboard/SummaryCards';
import RecentPostsTable from '../components/dashboard/RecentPostsTable';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <SummaryCards />
      <RecentPostsTable />
    </DashboardLayout>
  );
}
