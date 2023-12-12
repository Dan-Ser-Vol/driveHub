"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1702394005040 = void 0;
class $npmConfigName1702394005040 {
    constructor() {
        this.name = ' $npmConfigName1702394005040';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "role_entity" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_5383b4b5d6d709d2b8ee7b6e048" UNIQUE ("value"), CONSTRAINT "PK_7bc1bd2364b6e9bf7c84b1e52e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_accounttype_enum" AS ENUM('Basic', 'Premium')`);
        await queryRunner.query(`CREATE TYPE "public"."user_banned_enum" AS ENUM('Active', 'Inactive')`);
        await queryRunner.query(`CREATE TABLE "user" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "accountType" "public"."user_accounttype_enum" NOT NULL DEFAULT 'Basic', "banned" "public"."user_banned_enum" NOT NULL DEFAULT 'Inactive', "token" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."carPost_bodytype_enum" AS ENUM('crossover', 'wagon', 'sedan', 'coupe', 'hatchback', 'convertible', 'pickup', 'minivan')`);
        await queryRunner.query(`CREATE TYPE "public"."carPost_status_enum" AS ENUM('new', 'used')`);
        await queryRunner.query(`CREATE TYPE "public"."carPost_currency_enum" AS ENUM('USD', 'EUR', 'UAH')`);
        await queryRunner.query(`CREATE TABLE "carPost" ("createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "id" SERIAL NOT NULL, "brand" character varying NOT NULL DEFAULT 'Audi', "model" character varying NOT NULL, "year" integer NOT NULL, "image" character varying array NOT NULL DEFAULT '{}', "mileage" integer DEFAULT '0', "bodyType" "public"."carPost_bodytype_enum" NOT NULL DEFAULT 'sedan', "status" "public"."carPost_status_enum" NOT NULL DEFAULT 'used', "price" integer, "currency" "public"."carPost_currency_enum" NOT NULL DEFAULT 'UAH', "sold" boolean NOT NULL DEFAULT false, "region" character varying, "description" character varying, "userId" integer, CONSTRAINT "PK_d1e891b8ce1244a13751a68b95f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_entity_users_user" ("roleEntityId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_8a00d87ad7287cd13065ea8d023" PRIMARY KEY ("roleEntityId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a0d946593d3f86c5f705d6fdba" ON "role_entity_users_user" ("roleEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3640bc2ac06b3102b4c9d3b601" ON "role_entity_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "carPost" ADD CONSTRAINT "FK_c5877e148cbf989e9cffcc8c7ef" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_entity_users_user" ADD CONSTRAINT "FK_a0d946593d3f86c5f705d6fdbae" FOREIGN KEY ("roleEntityId") REFERENCES "role_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_entity_users_user" ADD CONSTRAINT "FK_3640bc2ac06b3102b4c9d3b6012" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "role_entity_users_user" DROP CONSTRAINT "FK_3640bc2ac06b3102b4c9d3b6012"`);
        await queryRunner.query(`ALTER TABLE "role_entity_users_user" DROP CONSTRAINT "FK_a0d946593d3f86c5f705d6fdbae"`);
        await queryRunner.query(`ALTER TABLE "carPost" DROP CONSTRAINT "FK_c5877e148cbf989e9cffcc8c7ef"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3640bc2ac06b3102b4c9d3b601"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a0d946593d3f86c5f705d6fdba"`);
        await queryRunner.query(`DROP TABLE "role_entity_users_user"`);
        await queryRunner.query(`DROP TABLE "carPost"`);
        await queryRunner.query(`DROP TYPE "public"."carPost_currency_enum"`);
        await queryRunner.query(`DROP TYPE "public"."carPost_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."carPost_bodytype_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_banned_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_accounttype_enum"`);
        await queryRunner.query(`DROP TABLE "role_entity"`);
    }
}
exports.$npmConfigName1702394005040 = $npmConfigName1702394005040;
//# sourceMappingURL=1702394005040-$npm_config_name.js.map