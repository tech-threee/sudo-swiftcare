import { MessageRes } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import _ from "lodash";
import { useStateValue } from "@/context/state-provider";

export default function MessageCard({ message }: { message: MessageRes; }) {
    const { _id, createdAt, message: content, read, reciepient, replies, sender, title, updatedAt } = message;
    const [{ message: selectedMessage }, dispatch] = useStateValue()
    
    function selectMessage() {
        dispatch({
            type: "SET_MESSAGE",
            payload: message,
        })
    }

    return (
        <Card onClick={selectMessage} className="mt-2 flex flex-col p-4 gap-2 cursor-pointer group hover:bg-neutral-100  ">
            <div>
                <div className="flex items-center gap-1 ">
                    {
                        read && <span className="w-2 h-2 shrink-0 bg-core rounded-full">

                        </span>
                    }
                    <h4 className=" line-clamp-1">
                        {_.startCase(title)}

                    </h4>
                </div>
                <p className="text-neutral-500 text-sm">
                    {sender.othernames} {sender.surname} 
                </p>
            </div>
            <div>
                <p className="text-xs line-clamp-2 font-light">
                    {content}
                </p>
            </div>

        </Card>
    );
}