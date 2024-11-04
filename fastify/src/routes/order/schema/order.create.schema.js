const createOrderSchema = {
    description: 'Create new order',
    tags: ['order'],
    summary: 'Create new order',
    body: {
        type: 'object',
        required: ['user_id', 'status', 'products', 'price', 'qty'],
        properties: {
            user_id: { type: 'number' },
            note: { type: 'string' },
            name: { type: 'string' },
            phone: { type: 'string' },
            address: { type: 'string' },
            status: { type: 'number' },
            products: {
                type: 'array',
                items: { type: 'number' },
            },
            price: {
                type: 'array',
                items: { type: 'number' },
            },
            qty: {
                type: 'array',
                items: { type: 'number' },
            }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                order: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        user_id: { type: 'number' },
                        note: { type: 'string' },
                        // delivery_name: { type: 'string' },
                        // delivery_phone: { type: 'string' },
                        // delivery_address: { type: 'string' },
                        created_at: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        phone: { type: 'string' },
                        status: { type: 'number' },
                    }
                },
                order_detail: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            order_id: { type: 'number' },
                            product_id: { type: 'number' },
                            name: { type: 'string' },
                            image: { type: 'string' },
                            qty: { type: 'number' },
                            price: { type: 'number' },
                        }
                    }
                }
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
                statusCode: 500,
                error: 'Internal Server Error',
                message: 'Something went wrong'
            }
        }
    }
};

module.exports = createOrderSchema;
