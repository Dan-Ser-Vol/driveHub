declare const _default: (() => {
    from: string;
    service: string;
    auth: {
        user: string;
        pass: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    from: string;
    service: string;
    auth: {
        user: string;
        pass: string;
    };
}>;
export default _default;
