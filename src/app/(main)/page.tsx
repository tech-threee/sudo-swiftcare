import DashboardCard from "@/components/cards/dashboard-card";
import StaffChart from "@/components/containers/staff-chart";
import { dashBoardIconsMap } from "@/utils/client";

export default function Home() {
  
  return (
    <main className="flex  flex-col items-center gap-10 px-2">
      <section className="grid gap-4  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          label="Total Staff"
          value={400}
          icon={dashBoardIconsMap.staff}
          link="/staff"
        />
        <DashboardCard
          label="Total Messages"
          value={1000}
          icon={dashBoardIconsMap.messages}
          link="/messages"

        />
        <DashboardCard
          label="Total Posts"
          value={20}
          icon={dashBoardIconsMap.posts}
          link="/blog"

        />
      </section>
      <section className="w-full grid grid-cols-2">
        <StaffChart />

      </section>
    </main>
  );
}
