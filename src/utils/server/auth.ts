import { ApiResponse, UserRes  } from "@/types";
import Axios from "../axios"


type LoginUserInput = {
    sid: string;
    pin: string;
};

export type ChangePasswordInput = {
    email: string;
    oldPassword: string;
    newPassword: string;
};

type ResetPasswordInput = Pick<ChangePasswordInput, "newPassword"> & {
    email: string;
};

type SendCodeInput = {
    email: string
};

type VerifyCodeInput = SendCodeInput & {
    code: string;
};


export const LOGIN_USER = async (info: LoginUserInput) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/staff`,
            data: info
        });

        if (response.data.success) {
            if (response.data.data.role === "SUDO") return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const RESET_PASSWORD = async (info: ResetPasswordInput) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/manager/reset-password`,
            data: info
        });

        if (response.status === 200) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const SEND_VERIFICATION_CODE = async (info: SendCodeInput) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/manager/send-code`,
            data: info
        });

        if (response.status === 200) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};

export const VERIFY_CODE = async (info: VerifyCodeInput) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/manager/verify-code`,
            data: info
        });

        if (response.status === 200) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};