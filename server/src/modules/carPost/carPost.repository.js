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
exports.CarPostRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const carPost_entity_1 = require("../../database/entities/carPost.entity");
const post_list_order_field_enum_1 = require("./enum/post-list-order-field.enum");
let CarPostRepository = exports.CarPostRepository = class CarPostRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(carPost_entity_1.CarPostEntity, dataSource.manager);
        this.dataSource = dataSource;
    }
    async getAll(query) {
        const queryBuilder = this.createQueryBuilder('post');
        if (query.search) {
            queryBuilder.where('LOWER(post.brand) LIKE :search OR LOWER(post.model) LIKE :search', {
                search: `%${query.search}%`,
            });
        }
        switch (query.orderBy) {
            case post_list_order_field_enum_1.PostListOrderFieldEnum.createdAt:
            case post_list_order_field_enum_1.PostListOrderFieldEnum.year:
            case post_list_order_field_enum_1.PostListOrderFieldEnum.price:
                queryBuilder.orderBy(`post.${query.orderBy}`, query.order);
                break;
            default:
                queryBuilder.orderBy('post.createdAt', 'DESC');
                break;
        }
        queryBuilder.take(query.limit);
        queryBuilder.skip(query.offset);
        const [entities, total] = await queryBuilder.getManyAndCount();
        return { entities, total };
    }
};
exports.CarPostRepository = CarPostRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], CarPostRepository);
//# sourceMappingURL=carPost.repository.js.map