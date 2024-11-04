import axiosInstance from "../axio";

const apiProduct = {
    // lay tat ca du lieu
    getAllProductPagination: (page, limit) => {
        return axiosInstance.get(`/products?page=${page}&limit=${limit}`).then((res) => res.data);
    },

    // lay chi tiet du lieu
    getProductById: (id) => {
        return axiosInstance.get(`/product/show/${id}`);
    },

    // lay sp theo danh muc
    getProductByCategory: (category_id) => {
        return axiosInstance.get(`/product/product-by-category/${category_id}`);
    },


    // lay sp theo thuong hieu + phan trang
    getProductByBrandSlug: (slug, page, limit) => {
        return axiosInstance.get(`/product/product-brand/${slug}?page=${page}&limit=${limit}`);
    },

    // chi tiet kem sp lien quan
    getDetailAndProductOther: (slug) => {
        return axiosInstance.get(`/product/detail/${slug}`);
    },



    // an / hien du lieu
    displayProduct: (id) => {
        return axiosInstance.put(`/product/display/${id}`);
    },

    // tim kiem san pham
    searchProducts: (key, page, limit) => {
        return axiosInstance.get(`/product/search/${key}?page=${page}&limit=${limit}`).then(res => res.data);
    },


    // xoa vao thung rac
    trashProduct: (id) => {
        return axiosInstance.put(`/product/trash/${id}`);
    },

    // phuc hoi thung rac
    rescoverTrash: (id)=>{
        return axiosInstance.put(`/product/rescover-trash/${id}`);
    },

    // lay ds rac
    getListTrash: (page, limit) =>{
        return axiosInstance.get(`/product/list-trash?page=${page}&limit=${limit}`).then( res => res.data);
    },

    // xoa vinh vien
    deleteProduct: (id) => {
        return axiosInstance.delete(`/product/delete/${id}`);
    },

    // ds sp ch sale
    getProNotSale: (page,limit) => {
        return axiosInstance.get(`/product/product-not-sale?page=${page}&limit=${limit}`).then( res => res.data);
    },

    createProduct: (data) => {
        
        return axiosInstance.post(`/product/create`, data, );
    },
    
    // cap nhat 
    updateProduct: (data, id) => {
       
        return axiosInstance.put(`/product/update/${id}`, data,);
    }

    

}

export default apiProduct;