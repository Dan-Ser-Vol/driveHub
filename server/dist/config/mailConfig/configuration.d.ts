declare const _default: (() => {
    from: string;
    service: string;
    auth: {
        user: string;
        pass: string;
    };
    front_url: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    from: string;
    service: string;
    auth: {
        user: string;
        pass: string;
    };
    front_url: string;
}>;
export default _default;
