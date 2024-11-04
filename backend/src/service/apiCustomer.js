import axiosInstance from "../axio";

const apiCustomer = {
    // lay tat ca du lieu
    getAll: (roles) => {
        return axiosInstance.get(`/user/${roles}`).then((res) => res.data);
    },

    // lay chi tiet du lieu
    getCustomerById: (id) => {
        return axiosInstance.get(`/user/show/${id}`);
    },


    // them du lieu
    createCustomer: (data) => {
        return axiosInstance.post(`/user/create`, data);
    },

    // cap nhat topic
    updateCustomer: (data, id) => {
        return axiosInstance.put(`/user/update/${id}`, data);
    },

    // xoa du lieu vao thung rac
    trashCustomer: (id) => {
        return axiosInstance.put(`/user/trash/${id}`);
    },

    // phuc hoi du lieu tu thung rac
    rescoverTrash: (id) => {
        return axiosInstance.put(`/user/rescover-trash/${id}`);
    },

    // lay danh sach du lieu trong thung rac
    getListTrash: (roles) => {
        return axiosInstance.get(`/user/list-trash/${roles}`).then((res) => res.data);
    },

    // hien thi or an
    displayCustomer: (id) => {
        return axiosInstance.put(`/user/display/${id}`);
    },


    // xoa vinh vien
    delCustomerById: (id) => {
        return axiosInstance.delete(`/user/delete/${id}`);
    },

    // login
    checkLogin: (data) => {
        return axiosInstance.post(`/user/check-login`, data);
    },
    checkLoginadmin: (data) => {
        return axiosInstance.post(`/user/check-login-admin`, data);
    },


    // cap nhat tai khoan va dia chi 
    updateUserAndAddress: (data, id) => {
        return axiosInstance.put(`/user/update-user-address/${id}`, data);
    },


    // thay doi mat khau
    updatePassword: (data, id) => {
        return axiosInstance.put(`/user/customer/updata-password/${id}`, data);
    },


    // cap nhat tung dia chi cua khach hang
    updataCustomerAddress: (data, id) => {
        return axiosInstance.put(`/user/customer/updata-address/${id}`, data);
    }



}

export default apiCustomer;