import axiosInstance from "../axio";

const apiDiscountedPro = {
    // lay tat ca sp sale
    getAll: (page, limit) => {
        return axiosInstance.get(`/discounted-products?page=${page}&limit=${limit}`).then((res) => res.data);
    },

    // lay san pham giam gia co tg hien tai nam trong khoang tg giam gia
    getDiscountProWithLimit: (limit) => {
        return axiosInstance.get(`/discounted-products/${limit}`);
    },


    // lay chi tiet sp sale
    getShowDiscountedProduct: (id) => {
        return axiosInstance.get(`/discounted-products/show/${id}`);
    },


    // them sp sale
    createDiscountedPro: (data) => {
        return axiosInstance.post(`/discounted-products/create`, data);
    },


    // ds rac
    listTrash: (page, limit) => {
        return axiosInstance.get(`/discounted-products/list-trash?page=${page}&limit=${limit}`).then((res) => res.data);
    },


    // xoa vao thung rac
    trashPro: (id) => {
        return axiosInstance.put(`/discounted-products/trash/${id}`);
    },


    // phuc hoi rac
    rescoverTrash: (id) => {
        return axiosInstance.put(`/discounted-products/rescover-trash/${id}`);
    },


    // display 
    displayPro: (id) => {
        return axiosInstance.put(`/discounted-products/display/${id}`);
    },


    // xoa vinh vien
    deletePro: (id) => {
        return axiosInstance.delete(`/discounted-products/delete/${id}`);
    },


    // update
    updateDiscountedPro: (data, id) => {
        return axiosInstance.put(`/discounted-products/update/${id}`, data);
    },

    // get by id
    getById: (id) => {
        return axiosInstance.get(`/discounted-products/get-by-id/${id}`);
    }






}

export default apiDiscountedPro;