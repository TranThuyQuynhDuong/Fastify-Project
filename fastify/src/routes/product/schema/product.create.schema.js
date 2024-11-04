const createProductSchema = {
    description: 'Tạo sản phẩm mới',
    tags: ['product'],
    summary: 'Tạo sản phẩm mới',
    body: {
        type: 'object',
        properties: {
            product: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    category_id: { type: 'number' },
                    brand_id: { type: 'number' },
                    price: { type: 'number' },
                    image: { type: 'string' },
                    image_detail: { type: 'string' },
                    detail_1: { type: 'string' },
                    detail_2: { type: 'string' },
                    status: { type: 'number' },
                    created_by: { type: 'number' },
                    qty: { type: 'number' },
                }
            },
            description: {
                type: 'object',
                properties: {
                    chip: { type: 'string' },
                    screen: { type: 'string' },
                    rear_camera: { type: 'string' },
                    front_camera: { type: 'string' },
                    operating_system: { type: 'string' },
                    ram: { type: 'string' },
                    rom: { type: 'string' },
                    pin: { type: 'string' },
                    size: { type: 'string' },
                    connect: { type: 'string' },
                }
            },
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                image: { type: 'string' },
                status: { type: 'number' },
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

module.exports = createProductSchema;
