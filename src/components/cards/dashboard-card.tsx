import _ from "lodash"

type Props = {
    icon: JSX.Element;
    label: string;
    value: string | number;
    link?: string
};

export default function DashboardCard({ icon, label, value, link }: Props) {
    return (
        <article className="relative overflow-hidden border rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
            <dt>
                <div className="absolute rounded-md bg-core text-white p-3 ">
                    {icon}
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{label}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{_.toString(value)}</p>
                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                        <a href={link ?? "/"} className="font-medium text-core hover:text-core/90">
                            View all
                        </a>
                    </div>
                </div>
            </dd>
        </article>
    );
}