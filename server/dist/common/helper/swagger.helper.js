"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerHelper = void 0;
const methods = ['get', 'post', 'put', 'delete', 'patch'];
class SwaggerHelper {
    static setDefaultResponses(doc) {
        var _a;
        for (const path of Object.keys(doc.paths)) {
            for (const method of methods) {
                const route = (_a = doc.paths[path]) === null || _a === void 0 ? void 0 : _a[method];
                if (route) {
                    if (method === 'delete') {
                        Object.assign(route.responses, {
                            204: { description: 'No content' },
                        });
                        delete route.responses[200];
                    }
                    if (route.security) {
                        Object.assign(route.responses, {
                            401: { description: 'Not authenticated' },
                            403: { description: 'Access denied' },
                        });
                    }
                    Object.assign(route.responses, {
                        400: { description: 'Bad request' },
                        404: { description: 'Not found' },
                        422: { description: 'Entity not found' },
                        500: { description: 'Server error' },
                    });
                }
            }
        }
    }
}
exports.SwaggerHelper = SwaggerHelper;
//# sourceMappingURL=swagger.helper.js.map