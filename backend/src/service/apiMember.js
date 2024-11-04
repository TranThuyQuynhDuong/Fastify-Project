import axiosInstance from "../axio";

const apiMember = {
    // lay tat ca du lieu
    getAll: (roles) => {
        return axiosInstance.get(`/user/${roles}`).then((res) => res.data);
    },

    // lay chi tiet du lieu
    getMemberById: (id) => {
        return axiosInstance.get(`/user/show/${id}`);
    },


    // them 
    createMember: (data) => {
        return axiosInstance.post(`/user/create`, data);
    },

    // cap nhat 
    updateMember: (data, id) => {
        return axiosInstance.put(`/user/update/${id}`, data);
    },

    // xoa du lieu vao thung rac
    trashMember: (id) => {
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
    displayMember: (id) => {
        return axiosInstance.put(`/user/display/${id}`);
    },


    // xoa vinh vien
    delMemberById: (id) => {
        return axiosInstance.delete(`/user/delete/${id}`);
    },


}

export default apiMember;