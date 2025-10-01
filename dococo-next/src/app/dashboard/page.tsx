import SummaryCards from "@/components/Dashboard/SummaryCard"
import RecentActivities from "@/components/Dashboard/RecentActivities"
import UpcomingSchedule from "@/components/Dashboard/UpcomingSchedule"
import QuickActions from "@/components/Dashboard/QuickActions"

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivities />
        <UpcomingSchedule />
      </div>
      <QuickActions />
    </main>
  )
}
