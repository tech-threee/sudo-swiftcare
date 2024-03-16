"use client";
import { usePathname, useRouter } from "next/navigation";
import _ from "lodash";

export default function PageTitle() {
    const pathname = usePathname();
    const router = useRouter();
    const paths = pathname.split("/");

    function generatePageTitle(): string {
        if (pathname === "/") {
            return _.capitalize("dashboard");
        } else if (paths.length === 2) {
            return _.startCase(_.replace(paths[1], "-", " "));
        } else if (paths.length === 3) {
            return `${_.capitalize(paths[2])} ${_.startCase(_.replace(paths[2], "-", " "))}`;
        }
        return "";
    }

    const pageTitle = generatePageTitle();
    // console.log(pageTitle);

    return (
        <div className="w-full flex justify-between  gap-2 p-4">
            <h1 className="font- text-3xl xl:text-4xl tracking-tighter">
                {pageTitle}
            </h1>
        </div>
    );
}