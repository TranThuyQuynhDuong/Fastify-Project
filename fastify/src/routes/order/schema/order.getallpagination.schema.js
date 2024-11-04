const getAllOrderSchema = {
    description: 'Get all order with pagination',
    tags: ['order'],
    summary: 'Get all order with pagination',
    querystring: {
        type: 'object',
        properties: {
            page: { type: 'string', default: '1', description: 'Page number of the pagination' },
            limit: { type: 'string', default: '10', description: 'Number of items per page' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            status: { type: 'number' },
                            name: { type: 'string' },
                            created_at: { type: 'string' },
                            phone: { type: 'string' },
                            email: { type: 'string' },
                            address: { type: 'string' },
                            note: { type: 'string' },
                            // delivery_name: { type: 'string' },
                            // delivery_phone: { type: 'string' },
                            // delivery_address: { type: 'string' },
                        }
                    }
                },
                meta: {
                    type: 'object',
                    properties: {
                        pagination: {
                            type: 'object',
                            properties: {
                                page: { type: 'string' },
                                pageSize: { type: 'string' },
                                pageCount: { type: 'string' },
                                total: { type: 'string' }
                            }
                        }
                    }
                },
                qty_cancel: { type: 'number' }
            }
        },
        400: {
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
        403: {
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

module.exports = getAllOrderSchema;
