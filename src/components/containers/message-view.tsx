"use client";
import { useStateValue } from "@/context/state-provider";
import { useState, useEffect } from "react";

import UserAvatar from "../core/user-avatar";
import parseHtml from "html-react-parser";
import _ from "lodash";
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import ViewOnlyRichText from "../rich-text/view-only-rich-text";
dayjs.extend(localeData);

export default function MessageView() {
    const [{ message }, dispatch] = useStateValue();
    const { _id, createdAt, message: content, read, reciepient, replies, sender, title, updatedAt } = message;

    const [newMessage, setNewMessage] = useState(message.message);

    useEffect(() => {
        setNewMessage(content);
    }, [content]);
    // console.log({ newMessage });


    if (!message || Object.keys(message).length === 0) {
        return (
            <section className="w-full h-full flex flex-col gap-2 justify-center items-center text-neutral-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[50px] h-[50px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>

                <p>
                    Select a message to preview
                </p>
            </section>
        );
    }

    return (
        <section className=" p-4 flex flex-col  " >
            <div className="flex items-center gap-8 justify-between">
                <div className="flex gap-2 items-center">
                    <UserAvatar
                        img=""
                        name={`${sender.othernames} ${sender.surname}`}
                        size="lg"
                    />
                    <div className="flex flex-col">
                        <p className="text-lg ">
                            {`${sender.othernames} ${sender.surname}`}

                        </p>
                        <p className="text-sm font-light">
                            {sender.email}
                        </p>
                    </div>
                </div>
                <div className="">
                    <p className="text-xs font-light text-neutral-600">
                        {dayjs(createdAt).format("DD/MM/YYYY" + " hh:mm A")}

                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="mt-4 text-lg">
                    {_.startCase(title)}
                </h4>
                <ViewOnlyRichText
                    letter={message.message}
                />


            </div>

        </section>
    );
}