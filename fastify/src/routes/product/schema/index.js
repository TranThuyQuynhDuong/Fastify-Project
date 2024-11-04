const deleteProductSchema = require("./product.delete.schema");
const displayProductSchema = require("./product.display.schema");
const getAllProductSchema = require("./product.getall.schema");
const getAllProductNotSaleSchema = require("./product.getallpronosale.schema");
const getProductByBrandPaginationSchema = require("./product.getbybrandpagination.schema");
const getProductByCategorySchema = require("./product.getbycategory.schema");
const getProductByCategoryAndOrtherSchema = require("./product.getdetailandother.schema");
const getListTrashSchema = require("./product.getlisttrash.schema");
const getOneProductSchema = require("./product.getone.schema");
const rescoverTrashProductSchema = require("./product.rescovertrash.schema");
const getSearchProductPaginationSchema = require("./product.searchbyname.schema");
const trashProductSchema = require("./product.trash.schema");
const createProductSchema = require("./product.create.schema");
const updateProductSchema = require("./product.update.schema");
const ProductBestSellerSchema = require("./product.getbestseller.schema");

module.exports = { 
    getAllProductSchema,
    getOneProductSchema,
    getProductByCategorySchema,
    getProductByCategoryAndOrtherSchema,
    getProductByBrandPaginationSchema,
    displayProductSchema,
    getSearchProductPaginationSchema,
    trashProductSchema,
    rescoverTrashProductSchema,
    getListTrashSchema,
    deleteProductSchema,
    getAllProductNotSaleSchema,
    createProductSchema,
    updateProductSchema,
    ProductBestSellerSchema,




}