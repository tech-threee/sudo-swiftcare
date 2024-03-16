import { actionTypes } from "@/context/reducer";
import { AxiosResponse } from "axios";

export type MongoResponse = {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v?: number;
}

type ActionTypes = keyof typeof actionTypes

export type Action = {
    type: ActionTypes;
    payload: any;
};

export type State = {
    user: any;
};

export type ApiResponse<T> = AxiosResponse<{
    success: boolean;
    message: string;
    data: T;
}>;

export type ForgotStoreType = {
    username?: string;
    tab: "send-code" | "verify-code" | "reset-password";
    token?: string;
};

export type User = {

};

export type UserRes = User & MongoResponse


