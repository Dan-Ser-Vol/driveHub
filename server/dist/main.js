"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const process = require("process");
const swagger_helper_1 = require("./common/helper/swagger.helper");
const configuration_service_1 = require("./config/database/configuration.service");
const app_module_1 = require("./modules/app.module");
const environment = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : '';
dotenv.config({ path: `environments/${environment}.env` });
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const appConfig = app.get(configuration_service_1.CommonConfigService);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Car Sales Platform API')
        .setDescription('API for managing carPost sales on our platform.')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_helper_1.SwaggerHelper.setDefaultResponses(document);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(appConfig.app_port, () => common_1.Logger.log('http://localhost:3000/api', 'Server is working'));
}
void start();
//# sourceMappingURL=main.js.map