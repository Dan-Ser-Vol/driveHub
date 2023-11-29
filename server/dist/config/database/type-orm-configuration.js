"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfiguration = void 0;
const config_module_1 = require("./config.module");
const configuration_service_1 = require("./configuration.service");
class TypeOrmConfiguration {
    static get config() {
        return {
            imports: [config_module_1.CommonConfigModule],
            useFactory: (commonConfigService) => ({
                type: 'postgres',
                host: commonConfigService.host,
                port: commonConfigService.port,
                username: commonConfigService.user,
                password: commonConfigService.password,
                database: commonConfigService.database,
                synchronize: false,
                migrationsRun: false,
                entities: [`${process.cwd()}/**/*.entity{.js, .ts}`],
                migrationsTableName: 'migrations',
            }),
            inject: [configuration_service_1.CommonConfigService],
        };
    }
}
exports.TypeOrmConfiguration = TypeOrmConfiguration;
//# sourceMappingURL=type-orm-configuration.js.map