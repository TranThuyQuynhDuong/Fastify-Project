import axiosInstance from "./axios";

const apiConfig = {
    // lay slider theo position
    getConfig: () => {
        return axiosInstance.get(`/config`);
    },

    // lay chi tiet 
    getOneConfig: (id) => {
        return axiosInstance.get(`/config/show/${id}`);
    },

    // cap nhat
    updateConfig: (data, id) => {
        return axiosInstance.put(`/config/update/${id}`, data);
    },


}

export default apiConfig;