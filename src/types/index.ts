import { actionTypes } from "@/context/reducer";
import { rolesMap } from "@/utils/server/user";
import { AxiosResponse } from "axios";


export type Pagination = {
    pageNumber: number;
    pageSize: number;
    totalCount: number;
}

type ActionTypes = keyof typeof actionTypes;

export type Action = {
    type: ActionTypes;
    payload: any;
};

export type State = {
    user: any;
    message: MessageRes;
};

export type Children = {
    children: React.ReactNode;
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

export type MongoResponse = {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v?: number;
};

export type UserRoles = keyof typeof rolesMap;

export type CreateUserInput = {
    othernames: string;
    surname: string;
    email: string;
    phone: string;
    role: UserRoles;
};

export type LoginUserInput = {
    email: string;
    password: string;
};

export type ChangePasswordInput = {
    email: string;
    oldPassword: string;
    newPassword: string;
};

export type ResetPasswordInput = Pick<ChangePasswordInput, "newPassword"> & {
    email: string;
};

export type SendCodeInput = Pick<LoginUserInput, "email">;

export type VerifyCodeInput = SendCodeInput & {
    code: string;
};



export type UpdateUserDetailsInput = Pick<User, "name" | "phone">;


export type User = {
    name: string;
    email: string;
    sid: string;
    pin: string;
    role: UserRoles;
    token: string;
    phone: string;
    dob: string;
    specialty: string;
    isFirstLogin: boolean;
    emergency_contacts: EmergencyContact[];
    image: string;
};

export type UserRes = User & MongoResponse;

export type EmergencyContact = {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
};


export type Message = {
    sender: Partial<Pick<UserRes, "email" | "phone" | "name" | "_id">>;
    reciepient: Partial<Pick<UserRes, "email" | "phone" | "name" | "_id">>;
    message: string;
    read: boolean;
    title: string;
    replies: MessageRes[];
};

export type MessageRes = Message & MongoResponse;