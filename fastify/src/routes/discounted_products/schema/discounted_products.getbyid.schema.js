const getDiscountedProByIdSchema = {
    description: 'Get a discounted product by id',
    tags: ['discounted_products'],
    summary: 'Get a discounted product by id',
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                product_id: { type: 'number' },
                sale_id: { type: 'number' },
                start_time: { type: 'string' },
                end_time: { type: 'string' },
                qty: { type: 'number' },
                qty_sold: { type: 'number' },
                status: { type: 'number' },
                updated_at: { type: 'string' },
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
                message: 'Something went wrong'
            }
        }



    }
};


module.exports = getDiscountedProByIdSchema;