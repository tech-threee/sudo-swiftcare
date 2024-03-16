"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import CreateMessageDialog from "@/components/dialogs/create-message-dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyMessages } from "@/utils/client";
import MessageCard from "@/components/cards/message-card";
import MessageView from "@/components/containers/message-view";


export default function MessagesPage() {
    return (
        <div className="h-full">
            <CreateMessageDialog />
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] max-h-[80vh] max-w-full rounded-lg border"
            >
                <ResizablePanel className="p-4 gap-4 flex flex-col" defaultSize={25}>
                    <h3 className="text-2xl ">
                        Inbox
                    </h3>
                    <Input placeholder="Search" />
                    <ScrollArea className=" flex flex-col gap-4  h-full">
                        {
                            dummyMessages.map((message) => (
                                <MessageCard
                                    key={message._id}
                                    message={message}
                                />
                            ))
                        }
                       
                   </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                   <MessageView />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}