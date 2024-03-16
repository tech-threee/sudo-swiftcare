"use client";
import CustomLoader from "@/components/loaders/custom-loader";
import { Children } from "@/types";
import { useState, useEffect } from "react";

export default function ClientProvider({ children }: Children) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? children : <div className="w-full h-full flex justify-center items-center"> <CustomLoader /> </div>;
}