"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const process = require("process");
exports.default = (0, config_1.registerAs)('postgresql', () => ({
    host: process.env.POSTGRES_HOST,
    app_port: process.env.APP_PORT,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    redis_url: process.env.REDIS_URl,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
}));
//# sourceMappingURL=configuration.js.map