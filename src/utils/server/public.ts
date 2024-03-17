import { ApiResponse, ChangePasswordInput, LoginUserInput, Pagination, ResetPasswordInput, SendCodeInput, UpdateUserDetailsInput, User, UserRes, UserRoles, VerifyCodeInput } from "@/types";
import Axios from "../axios";
import _ from "lodash";

export type AllCounts = {
    staff: {
        totalCount: number
        DOCTOR: number
        SUDO: number
        PHARMACIST: number
        NURSE: number
        IT: number
    };
    bookings: number;
    communications: number;
    patients: number;
};


export const GET_ALL_COUNTS = async () => {
    try {
        const response: ApiResponse<AllCounts> = await Axios({
            method: "GET",
            url: `/public/`,
        });

        if (response.data?.success) {
            return response.data.data;
        } else {
            throw new Error(response?.data?.message);
        }
    } catch (error) {
        throw error;
    }
};