import axiosInstance from "../axio";

const apiUploadFile = {

    uploadFile: (brand) => {
        return axiosInstance.post(`/upload`, brand);
    },


}

export default apiUploadFile;