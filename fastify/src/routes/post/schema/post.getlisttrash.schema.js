const getListTrashPostByTypeSchema = {
    description: 'Get list trash post by type with pagination',
    tags: ['post'],
    summary: 'Get list trash post by type with pagination',
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
                            title: { type: 'string' },
                            slug: { type: 'string' },
                            description_1: { type: 'string' },
                            name_topic: { type: 'string' },
                            image_1: { type: 'string' },
                            status: { type: 'number' },

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


module.exports = getListTrashPostByTypeSchema;