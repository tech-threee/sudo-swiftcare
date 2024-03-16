import ClientProvider from "@/providers/client-provider";
import { Children } from "@/types";

export default function MessagesLayout({children}: Children) {
    return <ClientProvider>
        {children}
    </ClientProvider>
}