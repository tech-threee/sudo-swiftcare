const config = {
    api: {
        base: process.env.NEXT_PUBLIC_BASE_API_URL || "/api/",
        local: process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:8888/api/",
    },
};

export default config;