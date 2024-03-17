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
import { PatientRes, UserRes } from "@/types";
import _ from "lodash";
import ViewItem from "@/components/core/view-item";
import { format } from "date-fns";

type Props = {
    user: PatientRes;
};

export default function ViewPatientDialog({ user }: Props) {
    const { role, _id, createdAt, email, name, phone, dob, image, pid,  } = user;
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
                    <ViewItem label="date of birth" value={dob || "N/A"} />
                    <ViewItem label="patient id" value={pid || "N/A"} />
                    <div className="col-span-2">
                        <ViewItem label="Created At" value={format(new Date(createdAt), "PPPP")} />

                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
}