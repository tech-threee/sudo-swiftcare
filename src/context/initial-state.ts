import { fetchUser } from "@/hooks/fetch-local-storage-data";

const userInfo = fetchUser();

const initialState = {
    user: userInfo,
    message: {},
    blog: {}
};

export default initialState;