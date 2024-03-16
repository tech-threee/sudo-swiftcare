"use client";

import { userColumns } from "@/components/table/colums";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "react-use";
import { UserRes } from '@/types';
import { useQuery } from "@tanstack/react-query";
import CustomLoader from "@/components/loaders/custom-loader";
import { GET_USERS } from "@/utils/server/user";
import CustomError from "@/components/core/custom-error";
import CreateUserDialog from "@/components/dialogs/create-user-dialog";
import { dummyStaff } from "@/utils/client";

export default function StaffPage() {
    const [user, setUser] = useLocalStorage<UserRes | null>("user", null);
    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['staff'],
        queryFn: async () => {
            if (user && user.token) {
                const staff = await GET_USERS(user.token);
                return staff;
            } else {
                return []
            }

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


    return (
            <div className="h-full">
                <CreateUserDialog />
                <>
                    {
                        (isError || data === undefined) ? <CustomError /> :
                            <DataTable
                                filterableCol="email"
                                columns={userColumns}
                            data={dummyStaff} title="staff" />
                    }
                </>
            </div>
    );
}

// npx shadcn-ui@latest add tooltip dialog select dropdown-menu
// Q8YQBD2FR2A