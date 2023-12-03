"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTemplates = void 0;
const mail__action_enum_1 = require("../enum/mail.-action.enum");
exports.allTemplates = {
    [mail__action_enum_1.EEmailActions.REGISTER]: {
        templateName: 'register',
        subject: 'Register into our school ',
    },
    [mail__action_enum_1.EEmailActions.WELCOME]: {
        templateName: 'register',
        subject: 'Welcome to our platform driveHub ',
    },
    [mail__action_enum_1.EEmailActions.ACTIVATED]: {
        templateName: 'activated',
        subject: 'Please activated your account ',
    },
    [mail__action_enum_1.EEmailActions.FORGOT_PASSWORD]: {
        templateName: 'forgot-password',
        subject: 'Please restore your password ',
    },
};
//# sourceMappingURL=mail.constant.js.map