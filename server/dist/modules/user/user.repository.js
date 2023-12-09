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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../database/entities/user.entity");
const user_list_order_field_enum_1 = require("./enum/user-list-order-field.enum");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.manager);
        this.dataSource = dataSource;
    }
    async getAll(query) {
        const queryBuilder = this.createQueryBuilder('user');
        switch (query.orderBy) {
            case user_list_order_field_enum_1.UserListOrderFieldEnum.createdAt:
                queryBuilder.orderBy('user.createdAt', query.order);
                break;
            case user_list_order_field_enum_1.UserListOrderFieldEnum.age:
                queryBuilder.orderBy('user.age', query.order);
                break;
        }
        if (query.search) {
            queryBuilder.andWhere('LOWER(user.email) LIKE :search', {
                search: `%${query.search}%`,
            });
        }
        queryBuilder.limit(query.limit);
        queryBuilder.offset(query.offset);
        const [entities, total] = await queryBuilder.getManyAndCount();
        return { entities, total };
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRepository);
//# sourceMappingURL=user.repository.js.map