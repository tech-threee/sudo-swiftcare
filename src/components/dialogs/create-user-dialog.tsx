import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import _ from "lodash";
import CreateUserForm from "../forms/create-user-form";
import { Button } from "../ui/button";

export default function CreateUserDialog() {
    return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="ml-auto absolute top-10 right-10">
                        Create New User
                    </Button>

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New User Account </DialogTitle>
                    </DialogHeader>
                    <CreateUserForm  />
                </DialogContent>
            </Dialog>
    );
}