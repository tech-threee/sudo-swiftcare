import { ApiResponse, ChangePasswordInput, LoginUserInput, ResetPasswordInput, SendCodeInput, UpdateUserDetailsInput, User, UserRes, UserRoles, VerifyCodeInput } from "@/types"
import Axios from "../axios";
import _ from "lodash"

type CreateUserInput = Pick<User, "email" | "othernames" | "surname" | "phone">

export const rolesMap = {
    "IT": "it",
    "DOCTOR": "doctor",
    "NURSE": "nurse",
    "PHARMACIST": "pharmacist",
    "SUDO": "sudo",
}


export const CREATE_USER = async (info: CreateUserInput,  token: string) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/staff/`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
}

export const GET_USER_BY_ID = async (id: string, role: UserRoles, token: string) => {

    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "GET",
            url: `/${rolesMap[role]}/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
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

export const GET_USERS = async ( token: string) => {

    try {
        const response: ApiResponse<UserRes[]> = await Axios({
            method: "GET",
            url: `/staff/`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return response.data.data;
        } else {
            return []
        }
    } catch (error) {
        throw error;
    }
}


export const UPDATE_USER = async (info: UpdateUserDetailsInput, token: string) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "PUT",
            url: `/auth/update-details`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};


export const CHANGE_USER_PASSWORD = async (info: ChangePasswordInput, token: string) => {
    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "POST",
            url: `/auth/change-password`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            return response.data.data;
        } else {
            throw new Error("oops");
        }
    } catch (error) {
        throw error;
    }
};


export const DELETE_USER = async (id: string, token: string) => {

    try {
        const response: ApiResponse<UserRes> = await Axios({
            method: "DELETE",
            url: `/staff/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
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