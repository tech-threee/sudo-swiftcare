"use client"
// Define all the columns for all the tables here

import { DataTableColumnHeader } from "./data-table-column-header"
import {  PatientRes, UserRes,  } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import * as React from "react"
import { format } from "date-fns"
import ViewUserDialog from "../dialogs/view-user-dialog";
import DeleteUserDialog from "../dialogs/delete-user-dialog";
import ViewPatientDialog from "../dialogs/view-patient-dialog";


export const userColumns: ColumnDef<UserRes>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Full Name" />
        ),
        cell: ({ row }) => (
            <>
                {row.original.name} 
            </>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "phone",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone" />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex items-center gap-4">
                <ViewUserDialog user={row.original} />
                {/* <DeleteUserDialog user={row.original} /> */}

            </div>
        ),
    }
]

export const patientColumns: ColumnDef<PatientRes>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Full Name" />
        ),
        cell: ({ row }) => (
            <>
                {row.original.name}
            </>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "phone",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone" />
        ),
    },
    {
        accessorKey: "pid",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Patient ID" />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex items-center gap-4">
                <ViewPatientDialog user={row.original} />
                {/* <DeleteUserDialog user={row.original} /> */}

            </div>
        ),
    }
];