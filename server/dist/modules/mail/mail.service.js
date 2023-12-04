"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const mail_constant_1 = require("./constants/mail.constant");
const mail__action_enum_1 = require("./enum/mail.-action.enum");
let sendMailService = exports.sendMailService = class sendMailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async mail(email, context) {
        const { templateName, subject } = mail_constant_1.allTemplates[mail__action_enum_1.EEmailActions.REGISTER];
        await this.mailerService.sendMail({
            to: email,
            subject,
            template: templateName,
            context,
        });
    }
};
exports.sendMailService = sendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], sendMailService);
//# sourceMappingURL=mail.service.js.map