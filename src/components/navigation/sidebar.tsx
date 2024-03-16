"use client";
import { useLocalStorage, useMedia } from 'react-use';
import { UserRes } from '@/types';
import { cn } from '@/lib/utils';
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname } from "next/navigation";

type NavLink = {
    icon: React.ReactNode;
    href: string;
    label: string;
};


const NAVLINKS: NavLink[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>,
        href: "/",
        label: "Dashboard"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>


        ,
        href: "/messages",
        label: "Messages"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        ,
        href: "/staff",
        label: "Staff"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>



        ,
        href: "/blog",
        label: "Blog"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        ,
        href: "/settings",
        label: "Settings"
    },
];

export default function Sidebar() {
    const [localUser, setLocalUser, removeLocalUser] = useLocalStorage<UserRes | null>("user", null);
    const canShowText = useMedia('(min-width: 1280px)', false);

    const pathname = usePathname();

    function isActive(href: string): boolean {
        return pathname === href;
    }

    function onLogout() {
        removeLocalUser();
        if (typeof window !== "undefined") {
            location.reload();
        }
    }

    return (
        <nav className={cn(
            'flex flex-col justify-between  max-w-[250px] py-4 h-full border ',
            canShowText ? "w-full " : "w-max "
        )}>
            <div className='flex flex-col border-b pb-4 border-neutral-100'>
                <div className='flex flex-col w-full justify-center items-center gap-2'>
                    <Avatar className="w-[50px] h-[50px]">
                        <AvatarFallback>
                            SMC
                        </AvatarFallback>
                    </Avatar>
                    <h1 className='tracking-tighter font-semibold text-xl text-center'>
                        {canShowText && "Setup Management Console"}
                    </h1>
                </div>

                {
                    canShowText &&
                    <p className='text-xs text-neutral-500 text-center'>
                        {format(new Date(), canShowText ? "PPPP" : "P")}
                    </p>
                }
            </div>

            <div className='w-full flex flex-col gap-2 mb-auto mt-4 px-2'>
                {
                    NAVLINKS.map((item) => (
                        <Link href={item.href} key={item.href}>
                            <div className={cn(
                                "w-full py-3 text-neutral-600 hover:bg-core/10 rounded-lg flex items-center px-4 gap-2",
                                isActive(item.href) ? "bg-core text-neutral-100 hover:bg-core/80" : ""
                            )}>
                                <p>

                                    {item.icon}
                                </p>

                                {
                                    canShowText &&
                                    <p className='tracking-tighter text-sm'>
                                        {item.label}
                                    </p>
                                }

                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className='px-2 '>
                <Button onClick={onLogout} variant="base" className='w-full text-left flex  gap-2 '>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>

                    {canShowText && <p className="text-base font-normal  tracking-tighter">Logout</p>}
                </Button>

            </div>

        </nav>
    );
}
