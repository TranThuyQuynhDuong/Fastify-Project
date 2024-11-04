const getAllProductSchema = {
    description: 'Get all product with pagination',
    tags: ['product'],
    summary: 'Get all product',
    params: {
        type: 'object',
        properties: {
            page: { type: 'string', default: '1' },
            limit: { type: 'string', default: '10' }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            attributes: {
                                type: 'object',
                                properties: {
                                    product_name: { type: 'string' },
                                    product_cat: { type: 'number' },
                                    product_brand: { type: 'number' },
                                    image: { type: 'string' },
                                    detail: { type: 'string' },
                                    price: { type: 'number' },
                                    status: { type: 'string' },
                                    nameCat: { type: 'string' },
                                    nameBrand: { type: 'string' },
                                    qty: { type: 'number' },
                                    slug: { type: 'string' },
                                }
                            }
                        }
                    }
                },
                meta: {
                    type: 'object',
                    properties: {
                        pagination: {
                            type: 'object',
                            properties: {
                                page: { type: 'number' },
                                total: { type: 'number' },
                                pageSize: { type: 'number' },
                                qty_trash: { type: 'number' },
                                pageCount: { type: 'number' }

                            }
                        }
                    }
                }
                // qty_trash: { type: 'number' },
                // qty_categories: { type: 'number' },
            }
        },
        400: { // status 400 la bad request, vi du: bi loi parameter
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            },
            example: {
                statusCode: 400,
                error: 'Bad request',
                message: 'Invalid query parameters'
            }
        },
        403: { // status 403 la Forbidden, vi du: bi loi parameter
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            },
            example: {
                statusCode: 403,
                error: 'Forbidden',
                message: 'Bạn không có quyền truy cập vào tài nguyên này'
            }
        },
        404: {
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            },
            example: {
                statusCode: 404,
                error: 'Not Found',
                message: 'Not Found'
            }
        },
        500: {
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            },
            example: {
                statusCode: 400,
                error: 'Internal Server Error',
                message: 'Internal Server Error'
            }
        }



    }
};


module.exports = getAllProductSchema;