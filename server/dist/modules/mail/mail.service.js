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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const app_config_service_1 = require("../../config/appConfig/app-config.service");
const mail_constant_1 = require("./constants/mail.constant");
const mail__action_enum_1 = require("./enum/mail.-action.enum");
let MailService = class MailService {
    constructor(mailerService, appConfig) {
        this.mailerService = mailerService;
        this.appConfig = appConfig;
    }
    async mail(email, context) {
        const { templateName, subject } = mail_constant_1.allTemplates[mail__action_enum_1.EEmailActions.REGISTER];
        context.frontUrl = this.appConfig.frontUrl;
        await this.mailerService.sendMail({
            to: email,
            subject,
            template: templateName,
            context,
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        app_config_service_1.AppConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map