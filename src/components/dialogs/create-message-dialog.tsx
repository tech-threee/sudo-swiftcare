import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import _ from "lodash";
import CreateMessageForm from "../forms/create-message-form";
import { Button } from "../ui/button";

export default function CreateMessageDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-auto absolute top-10 right-10">
                    Create New Message
                </Button>

            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Message </DialogTitle>
                </DialogHeader>
                <CreateMessageForm />
            </DialogContent>
        </Dialog>
    );
}