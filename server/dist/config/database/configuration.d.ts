declare const _default: (() => {
    host: string;
    app_port: string;
    port: string;
    user: string;
    password: string;
    database: string;
    redis_url: string;
    jwt_secret: string;
    jwt_expires_in: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    host: string;
    app_port: string;
    port: string;
    user: string;
    password: string;
    database: string;
    redis_url: string;
    jwt_secret: string;
    jwt_expires_in: string;
}>;
export default _default;
