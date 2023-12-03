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
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let sendMailService = exports.sendMailService = class sendMailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    mail() {
        this.mailerService
            .sendMail({
            to: 'danservoll1984@gmail.com',
            from: 'noreply@nestjs.com',
            subject: 'Testing Nest MailerModule ✔',
            text: 'welcome',
            html: '<b>welcome</b>',
        })
            .then(() => { })
            .catch(() => { });
    }
};
exports.sendMailService = sendMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], sendMailService);
//# sourceMappingURL=mail.service.js.map