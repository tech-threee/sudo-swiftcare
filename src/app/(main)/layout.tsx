import PageTitle from "@/components/core/page-title";
import Sidebar from "@/components/navigation/sidebar";
import { AuthProvider } from "@/providers";
import { Children } from "@/types";

export default function MainLayout({ children }: Children) {
    return (
        // <AuthProvider>
            <main className='w-full h-screen flex max-h-screen max-w-screen'>
                <Sidebar />
                <section className='w-full h-full max-h-screen p-8 overflow-hidden'>
                    <PageTitle />
                    {children}
                </section>
            </main>
        // </AuthProvider>
    );
}