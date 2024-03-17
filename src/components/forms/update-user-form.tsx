"use client";
import { UserRes,  } from "@/types";
import {  UPDATE_USER } from "@/utils/server/user";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {toast} from "sonner";
import { Loader2 } from "lucide-react";
import { useLocalStorage } from "react-use";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import _ from "lodash";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    name: z.string().min(3, "Othername should be more than 3 characters"),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
});

export default function UpdateUserForm() {
    const [localUser, setLocalUser,] = useLocalStorage<UserRes | null>("user", null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: localUser?.name || "",
            phone: localUser?.phone || "",
        },
    });

    const createUser = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!localUser || !localUser?.token) {
                throw new Error("Please login again");
            }
            return UPDATE_USER(values, localUser.token);
        },
        onSuccess: (newData) => {
            setLocalUser(newData);
            location.reload();

            // toast.success("Created User successfully")
            if (typeof window !== "undefined") {
                location.reload();
            }
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Updating your details");

        createUser.mutate(values, {
            onSuccess: (data) => {
                console.log(data);

                toast.success(`Your details have been updated`, {
                    id: toastSubmitId
                });

                location.reload();

                if (typeof window !== "undefined") {
                    location.reload();
                }
            },
            onError: (error: any) => {
                toast.error(error?.response?.data?.message || "Couldn't update details", {
                    id: toastSubmitId
                });
                console.log(error);

            }

        });

    }

    return (
        <Form   {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" max-w-lg w-full space-y-5  ">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={false} placeholder="Surname" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
               

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={false} placeholder="Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <Button disabled={createUser.isPending} variant="base" className=" w-full" type="submit">
                    {createUser.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Submit
                </Button>
            </form>

        </Form>
    );
}