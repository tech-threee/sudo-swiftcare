import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { tableIconsMap } from "../table/table-icons-map";
import ActionTooltip from "@/components/core/action-tooltip";
import { UserRes } from "@/types";
import _ from "lodash";
import ViewItem from "@/components/core/view-item";
import { format } from "date-fns";

type Props = {
    user: UserRes;
};

export default function ViewUserDialog({ user }: Props) {
    const { role, _id, createdAt, email, name, phone,  } = user;
    return (
            <Dialog>
                <ActionTooltip label={`View ${_.capitalize(role)}`}>
                    <DialogTrigger>
                        {tableIconsMap.view}
                    </DialogTrigger>
                </ActionTooltip>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>View {_.capitalize(role)} Details</DialogTitle>

                    </DialogHeader>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <ViewItem label="full name" value={name} />
                        <ViewItem label="email" value={email} />
                        <ViewItem label="phone" value={phone} />
                        <ViewItem label="role" value={role} />
                        <div className="col-span-2">
                            <ViewItem label="Created At" value={format(new Date(createdAt), "PPPP")} />

                        </div>
                    </div>

                </DialogContent>
            </Dialog>
    );
}