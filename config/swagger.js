import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Biswo',
        version: '1.0.0',
        description: 'Description',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./Routes/*.js', './Controllers/*.js'], // Use wildcard to include all .js files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
