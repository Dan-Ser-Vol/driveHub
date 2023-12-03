"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConfiguration = void 0;
const mail_config_service_1 = require("./mail-config.service");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mail_config_module_1 = require("./mail-config.module");
class MailConfiguration {
    static get config() {
        console.log('Configuration');
        return {
            imports: [mail_config_module_1.MailConfigModule],
            useFactory: (mailConfigService) => ({
                transport: {
                    from: mailConfigService.from,
                    service: mailConfigService.service,
                    auth: mailConfigService.auth,
                },
                template: {
                    dir: __dirname + '/email-templates',
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            inject: [mail_config_service_1.MailConfigService],
        };
    }
}
exports.MailConfiguration = MailConfiguration;
//# sourceMappingURL=mail-configuration.js.map