const ProductBestSellerSchema = {
    description: 'Get best seller product',
    tags: ['product'],
    summary: 'Get best seller product',
    querystring: {
        type: 'object',
        properties: {
            page: { type: 'string', default: '1', description: 'Page number of the pagination' },
            limit: { type: 'string', default: '9', description: 'Number of items per page' }
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
                            attributes: {
                                product_name: { type: 'string' },
                                category_id: { type: 'number' },
                                brand_id: { type: 'number' },
                                nameCat: { type: 'string' },
                                nameBrand: { type: 'string' },
                                image: { type: 'string' },
                                slug: { type: 'string' },
                                created_at: { type: 'string' }
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
                                pageSize: { type: 'number' },
                                pageCount: { type: 'number' },
                                total: { type: 'number' }
                            }
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
                error: 'Bad request',
                message: 'Forbidden Error'
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
                error: 'Bad request',
                message: 'Server error'
            }
        },
        429: {
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            },
            example: {
                statusCode: 429,
                error: 'Bad request',
                message: 'Too Many Requests'
            }
        }
    }
};

module.exports = ProductBestSellerSchema;
