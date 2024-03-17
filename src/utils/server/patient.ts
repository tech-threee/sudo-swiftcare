import { ApiResponse, ChangePasswordInput, LoginUserInput, ResetPasswordInput, SendCodeInput, UpdateUserDetailsInput, User, UserRes, UserRoles, VerifyCodeInput, Pagination, PatientRes } from "@/types";
import Axios from "../axios";
import _ from "lodash";

type CreateUserInput = Pick<User, "email" | "dob" | "phone" | "name"> & {
    role: string;
};

export const rolesMap = {
    "IT": "it",
    "DOCTOR": "doctor",
    "NURSE": "nurse",
    "PHARMACIST": "pharmacist",
    "SUDO": "sudo",
};


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

export const GET_PATIENTS = async (token: string) => {
    try {
        const response: ApiResponse<{
            pagination: Pagination;
            patients: PatientRes[];
        }> = await Axios({
            method: "GET",
            url: `/patient/`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.data.success) {
            console.log(response.data.data);
            return response.data.data?.patients || [];
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
};


