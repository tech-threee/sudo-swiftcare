"use client"
import DashboardCard from "@/components/cards/dashboard-card";
import StaffChart from "@/components/containers/staff-chart";
import { dashBoardIconsMap } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import CustomError from "@/components/core/custom-error";
import CustomLoader from "@/components/loaders/custom-loader";
import { GET_ALL_COUNTS } from "@/utils/server/public";

export default function Home() {
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ['all-counts'],
    queryFn: async () => {
      const rooms = await GET_ALL_COUNTS();
      return rooms;

    },
    retry: 3,
    staleTime: 300,
    refetchOnMount: true
  });

  if (isPending) {
    return (
      <section className="flex items-center justify-center w-full h-full">
        <CustomLoader />
      </section>

    );
  }
  if (isError || data === undefined) {
    return (
      <section className="flex items-center justify-center w-full h-full">
        <CustomError />
      </section>

    );
  }
  return (
    <main className="flex  flex-col items-center gap-10 px-2">
      <section className="grid gap-4  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          label="Total Staff"
          value={data?.staff?.totalCount || 0}
          icon={dashBoardIconsMap.staff}
          link="/staff"
        />
        <DashboardCard
          label="Total Messages"
          value={data?.communications || 0}
          icon={dashBoardIconsMap.messages}
          link="/messages"

        />
        <DashboardCard
          label="Total Patients"
          value={data?.patients}
          icon={dashBoardIconsMap.patients}
          link="/blog"

        />
      </section>
      <section className="w-full grid grid-cols-2">
        <StaffChart />

      </section>
    </main>
  );
}
