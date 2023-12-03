"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const process = require("process");
exports.default = (0, config_1.registerAs)('mail', () => ({
    from: process.env.NO_REPLAY,
    service: process.env.NO_REPLAY_SERVICE,
    auth: {
        user: process.env.NO_REPLAY_EMAIL,
        pass: process.env.NO_REPLAY_PASSWORD,
    },
}));
//# sourceMappingURL=configuration.js.map